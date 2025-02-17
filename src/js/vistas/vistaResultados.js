import Vistas from './vistas';
import icons from 'url:../../img/icons.svg';

class VistaResultados extends Vistas {

    _elementoPadre = document.querySelector('.results');

    _generarMargen(){
        console.log(this._data)
        return this._data.map(this._generarVistaPreviaMargen).join('');
        
    };

    _generarVistaPreviaMargen(resultados){

        return `
        
        <li class="preview">
            <a class="preview__link preview__link--active" href="${resultados.id}">
                <figure class="preview__fig">
                    <img src="${resultados.imagen}" alt="Test" />
                </figure>
                <div class="preview__data">
                    <h4 class="preview__title">${resultados.titulo}</h4>
                    <p class="preview__publisher">${resultados.publisher}</p>
                    <div class="preview__user-generated">
                        <svg>
                            <use href="${icons}#icon-user"></use>
                        </svg>
                    </div>
                </div>
            </a>
        </li>
        `

    };
};

export default new VistaResultados();