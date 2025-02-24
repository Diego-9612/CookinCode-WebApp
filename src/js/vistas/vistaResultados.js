import Vistas from './vistas';
import icons from 'url:../../img/icons.svg';

class VistaResultados extends Vistas {

    _elementoPadre = document.querySelector('.results');
    _mensajeError = ' We could not find that recipe. Please try again';
    _mensaje = 'XXXXXXXXXXXXXXXXXX';

    _generarMargen(){
        return this._data.map(this._generarVistaPreviaMargen).join('');
        
    };

    _generarVistaPreviaMargen(resultados){

        const id = window.location.hash.slice(1);
        
        return `
        
        <li class="preview">
            <a class="preview__link ${resultados.id === id ? 'preview__link--active' : ''}"  href="#${resultados.id}">
                <figure class="preview__fig">
                    <img src="${resultados.imagen}" alt="${resultados.titulo}" />
                </figure>
                <div class="preview__data">
                    <h4 class="preview__title">${resultados.titulo}</h4>
                    <p class="preview__publisher">${resultados.publisher}</p>
                </div>
            </a>
        </li>
        `

    };
};

export default new VistaResultados();