import Vistas from './vistas';
import icons from 'url:../../img/icons.svg';

class VistaPrevia extends Vistas {

    _elementoPadre = '';

    _generarMargen() {

        const id = window.location.hash.slice(1);

        return `
        
        <li class="preview">
            <a class="preview__link ${this._data.id === id ? 'preview__link--active' : ''}" href="#${this._data.id}">
            <figure class="preview__fig">
                <img src="${this._data.imagen}" alt="${this._data.titulo}" />
            </figure>
            <div class="preview__data">
                <h4 class="preview__title">${this._data.titulo}</h4>
                <p class="preview__publisher">${this._data.publisher}</p>
                <div class="preview__user-generated ${this._data.key ? '' : 'hidden'}">
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

export default new VistaPrevia();