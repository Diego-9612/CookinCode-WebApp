
import Vistas from './vistas';
import icons from 'url:../../img/icons.svg';
import { Fraction } from 'fractional';

class VistaReceta extends Vistas {
    _elementoPadre = document.querySelector('.recipe');
    _data;
    _mensajeError = ' We could not find that recipe. Please try again';
    _mensaje = '';

    addHandlerRender(handler) {
        ['hashchange', 'load'].forEach(ev => window.addEventListener(ev, handler));
    };

    addHandlerActualizarPorciones(handler) {
        this._elementoPadre.addEventListener('click', function (e) {
            const btn = e.target.closest('.btn--update-servings');
            if (!btn) return;
            const { updateTo } = btn.dataset;
            if (+updateTo > 0) handler(+updateTo);
        });
    };

    addHandlerAgregarMarcarReceta(handler) {
        this._elementoPadre.addEventListener('click', function (e) {
            const btn = e.target.closest('.btn--bookmark');
            if (!btn) return;
            handler();
        });
    };

    _generarMargen() {
        return `
        
        <figure class="recipe__fig">
            <img src="${this._data.imagen}" alt="${this._data.titulo}" class="recipe__img" />
            <h1 class="recipe__title">
                <span>${this._data.titulo}</span>
            </h1>
        </figure>
        
        <div class="recipe__details">
            <div class="recipe__info">
                <svg class="recipe__info-icon">
                    <use href="${icons}#icon-clock"></use>
                </svg>
                <span class="recipe__info-data recipe__info-data--minutes">${this._data.cookingTime}</span>
                <span class="recipe__info-text">minutes</span>
            </div>
            <div class="recipe__info">
                <svg class="recipe__info-icon">
                    <use href="${icons}#icon-users"></use>
                </svg>
                <span class="recipe__info-data recipe__info-data--people">${this._data.servings}</span>
                <span class="recipe__info-text">servings</span>
        
                <div class="recipe__info-buttons">
                    <button class="btn--tiny btn--update-servings" data-update-to="${this._data.servings - 1}">
                        <svg>
                            <use href="${icons}#icon-minus-circle"></use>
                        </svg>
                    </button>
                    <button class="btn--tiny btn--update-servings" data-update-to="${this._data.servings + 1}">
                        <svg>
                            <use href="${icons}#icon-plus-circle"></use>
                        </svg>
                    </button>
                </div>
            </div>
            <div class="recipe__user-generated">
            </div>
            <button class="btn--round btn--bookmark">
                <svg class="">
                    <use href="${icons}#icon-bookmark${this._data.marcador ? '-fill' : ''}"></use>
                </svg>
            </button>
        </div>
        
        <div class="recipe__ingredients">
            <h2 class="heading--2">Recipe ingredients</h2>
            <ul class="recipe__ingredient-list">
            ${this._data.ingredients.map(this._generarMargenIngrediente).join('')}
            </ul>
        </div>
        
        <div class="recipe__directions">
            <h2 class="heading--2">How to cook it</h2>
            <p class="recipe__directions-text">
            This recipe was carefully designed and tested by
            <span class="recipe__publisher">${this._data.publisher}</span>. Please check out directions at their website.
            </p>
            <a class="btn--small recipe__btn" href="http://thepioneerwoman.com/cooking/pasta-with-tomato-cream-sauce/" target="_blank">
                <span>Directions</span>
                <svg class="search__icon">
                    <use href="${icons}#icon-arrow-right"></use>
                </svg>
            </a>
        </div>        
    `;
    };

    _generarMargenIngrediente(ingrediente) {
        return `
                <li class="recipe__ingredient">
                    <svg class="recipe__icon">
                        <use href="${icons}#icon-check"></use>
                    </svg>
                    <div class="recipe__quantity">${ingrediente.quantity ? new Fraction(ingrediente.quantity).toString() : ' '}</div>
                    <div class="recipe__description">
                        <span class="recipe__unit">${ingrediente.unit || ''}</span>
                        ${ingrediente.description}
                    </div>
                </li>
        `;
    };
};

export default new VistaReceta();