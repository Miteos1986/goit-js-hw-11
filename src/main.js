// Описаний у документації
import SimpleLightbox from "simplelightbox";
// Додатковий імпорт стилів
import "simplelightbox/dist/simple-lightbox.min.css";
// Описаний у документації
import iziToast from "izitoast";
// Додатковий імпорт стилів
import "izitoast/dist/css/iziToast.min.css";

import {createMarkup} from "./js/render-functions"
import { searchPhoto } from "./js/pixabay-api";

const list = document.querySelector(".js-list")
const searchForm = document.querySelector(".js-search-form");



searchForm.addEventListener("submit", handleSubmit);
function handleSubmit (event){
event.preventDefault();
const input = searchForm.elements.input.value;

searchPhoto (input)
  .then ((data)=>
  list.insertAdjacentHTML("beforeend",createMarkup(data.hits)))
  .catch((error)=> console.log(error))
}

const lightbox = new SimpleLightbox('.gallery a', {  
    
    captionsData: "alt",
    captionPosition:"bottom",
    captionDelay: 250
  });

  