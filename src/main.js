import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import { getSearchResults } from './js/pixabay-api'
import { renderImages } from './js/render-functions'


const search = document.querySelector('.search-input')
const button = document.querySelector('.search-btn')
const gallery = document.querySelector('.gallery')
const load = document.querySelector('.loader')

const lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250,
});

button.addEventListener('click', handleSearch)

function handleSearch(e) {
    e.preventDefault()

    const searchValue = search.value.trim()
    // Порожній запит
    if (searchValue === '') {
        iziToast.error({
            message: 'Input field can not be empty',
            position: "topRight"
        })
        search.value = ''
        return
    }

    load.classList.remove('is-hidden')



    getSearchResults(searchValue)
        .then((data) => {
            if (data.total === 0) {                             //нічого не знайдено
                iziToast.show({
                    message: '"Sorry, there are no images matching your search query. Please try again!"',
                    color: 'blue',
                    position: 'topRight'
                })
                load.classList.add('is-hidden')
                return
            }

            gallery.innerHTML = renderImages(data.hits)
            lightbox.refresh()
        })
        .catch(e => {
            iziToast.error({
                message: `${e}`
            })
        }).finally(() => {
            search.value = ''
            load.classList.add('is-hidden')
        })
}
