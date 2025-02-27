import { async } from "regenerator-runtime";
import { API_URL, RES_PER_PAGE, KEY } from "./configuraciones";
import { getJSON, enviarJSON } from "./ayudantes";


export const estado = {
    receta: {},
    buscar: {
        consulta: '',
        resultados: [],
        pagina: 1,
        resultadosPagina: RES_PER_PAGE,

    },
    marcadores: [],
};

const crearObjetoReceta = function(data){

    const { recipe } = data.data;
    return {
        id: recipe.id,
        titulo: recipe.title,
        publisher: recipe.publisher,
        sourceUrl: recipe.source_url,
        imagen: recipe.image_url,
        servings: recipe.servings,
        cookingTime: recipe.cooking_time,
        ingredients: recipe.ingredients,
        ...(recipe.key && {key : recipe.key})
    };
};

export const cargarReceta = async function (id) {

    try {
        const data = await getJSON(`${API_URL}/${id}`);

        estado.receta = crearObjetoReceta(data);

        if (estado.marcadores.some(marcador => marcador.id === id))
            estado.receta.marcador = true;
        else estado.receta.marcador = false;

    } catch (err) {
        throw err;
    };

};

export const cargarBuscarReceta = async function (consulta) {

    try {

        estado.buscar.consulta = consulta;

        const data = await getJSON(`${API_URL}?search=${consulta}`);
        estado.buscar.resultados = data.data.recipes.map(rec => {
            return {
                id: rec.id,
                titulo: rec.title,
                publisher: rec.publisher,
                imagen: rec.image_url,
            };
        });
        estado.buscar.pagina = 1;

    } catch (err) {
        throw err;
    };

};

export const getPaginaResultadosBusqueda = function (pagina = estado.buscar.pagina) {

    estado.buscar.pagina = pagina;

    const inicio = (pagina - 1) * estado.buscar.resultadosPagina;
    const fin = pagina * estado.buscar.resultadosPagina;

    return estado.buscar.resultados.slice(inicio, fin);
};

export const actualizarPorciones = function (newPorcion) {

    estado.receta.ingredients.forEach(ing => {
        ing.quantity = (ing.quantity * newPorcion) / estado.receta.servings;

    });

    estado.receta.servings = newPorcion;

};

const almacenarMarcadoresRecetas = function(){

    localStorage.setItem('marcadoresRecetas', JSON.stringify(estado.marcadores));

}

export const marcarReceta = function (receta) {

    estado.marcadores.push(receta);

    if (receta.id === estado.receta.id) estado.receta.marcador = true;

    almacenarMarcadoresRecetas();
};

export const desmarcarReceta = function(id){
    const index = estado.marcadores.findIndex(el => el.id === id);
    estado.marcadores.splice(index, 1);
    if (id === estado.receta.id) estado.receta.marcador = false;

    almacenarMarcadoresRecetas();
};

const init = function(){
    const AlmacenamientoLocal = localStorage.getItem('marcadoresRecetas');
    if(AlmacenamientoLocal) estado.marcadores = JSON.parse(AlmacenamientoLocal);
};

init();

const limpiarMarcadores = function(){
    localStorage.clear('marcadoresRecetas');
};

export const enviarReceta =  async function(newReceta){

    try{

        const ingredientes = Object.entries(newReceta).filter(entry => entry[0].startsWith('ingredient') && entry[1] !== '')
    .map(ing => {
        const ingArr = ing[1].replaceAll(' ', '').split(',');
        if (ingArr.length !== 3) throw new Error('El formato es incorrecto, intente nuevamente');

        const [quantity, unit, description] = ingArr;
        return { quantity: quantity ? +quantity : null , unit: unit , description};
    } );

    const receta = {
        title: newReceta.title,
        source_url: newReceta.sourceUrl,
        image_url: newReceta.image,
        publisher: newReceta.publisher,
        cooking_time: newReceta.cookingTime,
        servings: newReceta.servings,
        ingredientes,
    }

    const data = await enviarJSON(`${API_URL}?key=${KEY}`, receta);
    estado.receta = crearObjetoReceta(data);
    marcarReceta(estado.receta);
    console.log(data);

    }catch (err){

        throw err;
        
    };
};



