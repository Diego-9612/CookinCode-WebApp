import Vistas from './vistas';
import VistaPrevia from './VistaPrevia';

class VistaMarcadores extends Vistas {

    _elementoPadre = document.querySelector('.bookmarks__list');
    _mensajeError = 'No existen marcadores, busque una  receta y marquela ;)';
    _mensaje = 'XXXXXXXXXXXXXXXXXXXX';

    addHandlerRender(handler){
        window.addEventListener('load', handler);
    };

    _generarMargen(){
        return this._data.map(marcador => VistaPrevia.render(marcador, false) ).join('');
        
    };
};

export default new VistaMarcadores();