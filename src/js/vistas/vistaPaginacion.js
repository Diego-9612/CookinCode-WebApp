import Vistas from './vistas';
import icons from 'url:../../img/icons.svg';

class VistaPaginacion extends Vistas{
    _elementoPadre = document.querySelector('.pagination');


    _generarMargen(){
        const numPaginas = this._data.resultados / this._data.resultadosPagina;
        console.log(numPaginas);
    }

};

export default new VistaPaginacion();