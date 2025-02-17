import icons from 'url:../../img/icons.svg';
export default class Vistas{

    _data;

    render(data) {
            this._data = data;
            const margen = this._generarMargen();
            this._limpiar();
            this._elementoPadre.insertAdjacentHTML('afterbegin', margen);
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
    
        renderMensaje(mensaje = this._mensaje){
            const markup = `
            <div class="message">
                <div>
                    <svg>
                        <use href="${icons}#icon-smile"></use>
                    </svg>
                </div>
                <p>${mensaje}</p>
            </div>
            `;
    
            this._limpiar();
            this._elementoPadre.insertAdjacentHTML('afterbegin', markup);
        }
    
}