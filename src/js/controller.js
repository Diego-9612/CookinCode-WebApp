import * as modelo from './modelo'
import vistaReceta from './vistas/vistaReceta'
import vistaBusquedas from './vistas/vistaBusquedas';
import vistaResultados from './vistas/vistaResultados';
import VistaPaginacion from './vistas/vistaPaginacion';

import 'core-js/stable';
import 'regenerator-runtime/runtime';
import vistaPaginacion from './vistas/vistaPaginacion';

///////////////////////////////////////

if (modelo.hot) {
  modelo.hot.accept();
}

const controladorRecetas = async function () {

  try {

    const id = window.location.hash.slice(1);
    if (!id) return;

    vistaReceta.renderSpinner();

    //Actualizar resultados y marcar el elemento de la busqueda
    vistaResultados.actualizar(modelo.getPaginaResultadosBusqueda());

    // 1. Cargar informacion de la receta

    await modelo.cargarReceta(id);

    // 2. Maquetar la informacion de la receta en el HTML
    vistaReceta.render(modelo.estado.receta);

  } catch (err) {
    vistaReceta.renderMensaje();
  };

};

const controladorBuscarResultados = async function () {
  try {

    const consulta = vistaBusquedas.getConsulta();
    if (!consulta) return;

    vistaResultados.renderSpinner();

    await modelo.cargarBuscarReceta(consulta);
    vistaResultados.render(modelo.getPaginaResultadosBusqueda())

    VistaPaginacion.render(modelo.estado.buscar)

  } catch (err) {
    console.error(err);
  };
};

const controlPaginacion = function (goToPage) {
  vistaResultados.render(modelo.getPaginaResultadosBusqueda(goToPage));

  VistaPaginacion.render(modelo.estado.buscar);
}

const controlPorciones = function (newPorcion) {

  //Actualizar el numero de porciones
  modelo.actualizarPorciones(newPorcion);

  //Actualizar la vista 
  vistaReceta.actualizar(modelo.estado.receta);

};

const init = function () {
  vistaReceta.addHandlerRender(controladorRecetas);
  vistaBusquedas.addHandlerSearch(controladorBuscarResultados);
  vistaPaginacion.addHandlerClick(controlPaginacion);
  vistaReceta.addHandlerActualizarPorciones(controlPorciones);
};

init();


