import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const search = document.querySelector('.search-input')
const button = document.querySelector('.search-btn')

button.addEventListener('click', handleSearch)

function handleSearch(e) {
    e.preventDefault()
    console.log(search.value);
}

