import { async } from "regenerator-runtime";
import { API_URL } from "./configuraciones";
import { getJSON } from "./ayudantes";


export const estado = {
    receta: {},
}

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
        console.error(`${err}`);
    };

}