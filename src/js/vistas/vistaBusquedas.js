class VistaBusquedas {

    _elementoPadre = document.querySelector('.search');

    getConsulta() {
        const consulta = this._elementoPadre.querySelector('.search__field').value;
        this._limpiarBuscador();
        return consulta;
    };

    _limpiarBuscador(){
        return this._elementoPadre.querySelector('.search__field').value = '';
    };

    addHandlerSearch(handler) {
        this._elementoPadre.addEventListener('submit', function (e) {
            e.preventDefault();
            handler();
        });
    };
};

export default new VistaBusquedas();

