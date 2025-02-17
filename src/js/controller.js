import * as modelo from './modelo'
import vistaReceta from './vistas/vistaReceta'
import vistaBusquedas from './vistas/vistaBusquedas';
import vistaResultados from './vistas/vistaResultados';

import 'core-js/stable';
import 'regenerator-runtime/runtime';

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
    vistaReceta.renderMensaje();
  };

};

const controladorBuscarResultados = async function(){
  try{

    vistaResultados.renderSpinner();

    const consulta = vistaBusquedas.getConsulta();
    if(!consulta) return; 

    await modelo.cargarBuscarReceta(consulta);
    vistaResultados.render(modelo.estado.buscar.resultados)

  } catch (err) {
    console.error(err);
  };
};

controladorBuscarResultados();

const init = function (){
  vistaReceta.addHandlerRender(controladorRecetas);
  vistaBusquedas.addHandlerSearch(controladorBuscarResultados);
};

init();


