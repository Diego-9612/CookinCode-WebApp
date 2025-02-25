import Vistas from './vistas';
import VistaPrevia from './VistaPrevia';

class VistaResultados extends Vistas {

    _elementoPadre = document.querySelector('.results');
    _mensajeError = ' We could not find that recipe. Please try again';
    _mensaje = '';

    _generarMargen(){
            return this._data.map(resultados => VistaPrevia.render(resultados, false) ).join('');
        };
};

export default new VistaResultados();