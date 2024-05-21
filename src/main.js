import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import { getSearchResults } from './js/pixabay-api'
import { renderImages } from './js/render-functions'


const search = document.querySelector('.search-input')
const button = document.querySelector('.search-btn')
const gallery = document.querySelector('.gallery')

const lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250,
});

button.addEventListener('click', handleSearch)

function handleSearch(e) {
    e.preventDefault()
    const searchValue = search.value.trim()
    if (searchValue == '') {
        iziToast.error({
            title: 'Error',
            message: 'Illegal operation',
        })
        return
    }


    getSearchResults(searchValue)
        .then((data) => {
            if (!searchValue) {
                iziToast.error({
                    title: 'Error',
                    message: 'Illegal operation',
                })
                return
            }
            search.value = ''
            gallery.innerHTML = renderImages(data.hits)
            lightbox.refresh()
        })

}
