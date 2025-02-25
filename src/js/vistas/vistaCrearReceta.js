import Vistas from './vistas';
import icons from 'url:../../img/icons.svg';

class VistaCrearReceta extends Vistas {
    _elementoPadre = document.querySelector('.upload');

    _window = document.querySelector('.add-recipe-window');
    _overlay = document.querySelector('.overlay');
    _btnAbrir = document.querySelector('.nav__btn--add-recipe');
    _btnCerrar = document.querySelector('.btn--close-modal');

    constructor() {
        super();
        this._addHandlerMostrarVentana();
        this._addHandlerOcultarVentana();
    }

    toggleWindow() {
        this._overlay.classList.toggle('hidden');
        this._window.classList.toggle('hidden');
    }

    _addHandlerMostrarVentana() {

        this._btnAbrir.addEventListener('click', this.toggleWindow.bind(this));

    };

    _addHandlerOcultarVentana() {

        this._btnCerrar.addEventListener('click', this.toggleWindow.bind(this));
        this._overlay.addEventListener('click', this.toggleWindow.bind(this));

    };

    addHandlerEnviarFormulario(handler){
        this._elementoPadre.addEventListener('submit', function(e){
            e.preventDefault();
            const dataArray = [...new FormData(this)];
            const data = Object.fromEntries(dataArray);
            handler(data);
        });
    };


    _generarMargen() {

    };

};

export default new VistaCrearReceta();