import { async } from "regenerator-runtime";
import { API_URL } from "./configuraciones";
import { getJSON } from "./ayudantes";


export const estado = {
    receta: {},
    buscar: {
        consulta: '',
        resultados: [],
    },
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

    } catch (err) {
        throw err;
    };

};

cargarBuscarReceta('pizza');

