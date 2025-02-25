import { async } from "regenerator-runtime";
import { API_URL, RES_PER_PAGE } from "./configuraciones";
import { getJSON } from "./ayudantes";


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

export const cargarReceta = async function (id) {

    try {

        const data = await getJSON(`${API_URL}/${id}`);

        const { recipe } = data.data;

        estado.receta = {
            id: recipe.id,
            titulo: recipe.title,
            publisher: recipe.publisher,
            sourceUrl: recipe.source_url,
            imagen: recipe.image_url,
            servings: recipe.servings,
            cookingTime: recipe.cooking_time,
            ingredients: recipe.ingredients,
        };

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


