import icons from 'url:../../img/icons.svg';
export default class Vistas {

    _data;

    render(data, render = true) {

        if (!data || (Array.isArray(data) && data.length === 0)) return this.renderMensaje();

        this._data = data;
        
        const margen = this._generarMargen();

        if(!render) return margen;

        this._limpiar();
        this._elementoPadre.insertAdjacentHTML('afterbegin', margen);
    };

    actualizar(data) {
        this._data = data;
        const newMargen = this._generarMargen();

        const newDom = document.createRange().createContextualFragment(newMargen);
        const newElements = Array.from(newDom.querySelectorAll('*'));
        const currentElements = Array.from(this._elementoPadre.querySelectorAll('*'));

        newElements.forEach((newEl, i) => {
            const curEl = currentElements[i];

            if (!newEl.isEqualNode(curEl) && newEl.firstChild?.nodeValue.trim() !== '') {
                curEl.textContent = newEl.textContent;
            };

            if (!newEl.isEqualNode(curEl))
                Array.from(newEl.attributes).forEach(attr => {
                    curEl.setAttribute(attr.name, attr.value)
                }
                );
        });

    };

    _limpiar() {
        this._elementoPadre.innerHTML = '';
    };

    renderSpinner = function () {

        const markup = `
            <div class="spinner">
                <svg>
                    <use href="${icons}#icon-loader"></use>
                </svg>
            </div>
        `
        this._limpiar();
        this._elementoPadre.insertAdjacentHTML('afterbegin', markup);
    };

    renderError(mensaje = this._errorMensaje) {
        const markup = `
            <div class="message">
                <div>
                    <svg>
                        <use href="${icons}#icon-alert-triangle"></use>
                    </svg>
                </div>
                <p>${mensaje}</p>
            </div>
            `;

        this._limpiar();
        this._elementoPadre.insertAdjacentHTML('afterbegin', markup);
    };

    renderMensaje(mensaje = this._mensaje) {
        const markup = `
            <div class="message">
                <div>
                    <svg>
                        <use href="${icons}#icon-alert-triangle"></use>
                    </svg>
                </div>
                <p>${mensaje}</p>
            </div>
            `;

        this._limpiar();
        this._elementoPadre.insertAdjacentHTML('afterbegin', markup);
    }

}