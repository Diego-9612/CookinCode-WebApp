import * as modelo from './modelo'
import vistaReceta from './vistas/vistaReceta'

import 'core-js/stable';
import 'regenerator-runtime/runtime';

const recipeContainer = document.querySelector('.recipe');

///////////////////////////////////////

const controladorRecetas = async function () {

  try {

    const id = window.location.hash.slice(1);
    if (!id) return;

    vistaReceta.renderSpinner();

    // 1. Cargar informacion de la receta

    await modelo.cargarReceta(id);

    // 2. Maquetar la informacion de la receta en el HTML
    vistaReceta.render(modelo.estado.receta);



  } catch (err) {
    alert(err)
  };

};

['hashchange', 'load'].forEach(ev => window.addEventListener(ev, controladorRecetas));


