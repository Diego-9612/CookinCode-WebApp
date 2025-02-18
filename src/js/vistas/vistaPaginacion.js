import Vistas from './vistas';
import icons from 'url:../../img/icons.svg';

class VistaPaginacion extends Vistas{
    _elementoPadre = document.querySelector('.pagination');


    addHandlerClick(handler){
        this._elementoPadre.addEventListener('click', function(e){

            const btn = e.target.closest('.btn--inline');
            if (!btn) return;
            const goToPage = +btn.dataset.goto;
            handler(goToPage);

        });
    };


    _generarMargen(){
        const pagActual = this._data.pagina;
        const numPaginas = Math.ceil(this._data.resultados.length / this._data.resultadosPagina);
        console.log(numPaginas);

        if (pagActual === 1 && numPaginas > 1){
            return `
            
            <button data-goto="${pagActual + 1}" class="btn--inline pagination__btn--next">
                <span> pagina ${pagActual + 1}</span>
                <svg class="search__icon">
                    <use href="${icons}#icon-arrow-right"></use>
                </svg>
            </button>  
            `;
        };

        if (pagActual === numPaginas && numPaginas > 1){
            return `
            <button data-goto="${pagActual - 1}" class="btn--inline pagination__btn--prev">
                <svg class="search__icon">
                    <use href="${icons}#icon-arrow-left"></use>
                </svg>
                <span>Pagina ${pagActual-1}</span>
            </button>
            `;
        };

        if (pagActual < numPaginas){
            return `
            <button data-goto="${pagActual - 1}" class="btn--inline pagination__btn--prev">
                <svg class="search__icon">
                    <use href="${icons}#icon-arrow-left"></use>
                </svg>
                <span>Pagina ${pagActual-1}</span>
            </button>

            <button data-goto="${pagActual + 1}" class="btn--inline pagination__btn--next">
                <span> Pagina${pagActual + 1}</span>
                <svg class="search__icon">
                    <use href="${icons}#icon-arrow-right"></use>
                </svg>
            </button>
            `;
        };

        return '';


    };

};

export default new VistaPaginacion();