import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import { getSearchResults } from './js/pixabay-api'

const search = document.querySelector('.search-input')
const button = document.querySelector('.search-btn')

button.addEventListener('click', handleSearch)

function handleSearch(e) {
    e.preventDefault()
    console.log(search.value);
}

getSearchResults().then(total => { console.log(total.hits); })