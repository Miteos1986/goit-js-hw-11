// Описаний у документації
import SimpleLightbox from "simplelightbox";
// Додатковий імпорт стилів
import "simplelightbox/dist/simple-lightbox.min.css";



const list = document.querySelector(".js-list")
list.insertAdjacentHTML("beforeend",createMarkup)


const lightbox = new SimpleLightbox('.gallery a', {  
    sourceAttr: "href",
    captionsData: "title",
    captionPosition:"bottom",
    captionDelay: 200
  });

  refresh ();


function createMarkup (arr) {
   
    return arr.map(({webformatURL, largeImageURL,tags, likes, views, comments, downloads}) =>`
<li class="gallery-item">
<a class="gallery-link" href="${webformatURL}" >
<img class="gallery-img" src="${largeImageURL}" alt=${tags} width=360 />
</a>
<ul class="gallary">
<li class="subscribe"><span class="span-subscribe">likes</span> ${likes}</li>
<li class="subscribe"><span class="span-subscribe">views</span> ${views}</li>
<li class="subscribe"><span class="span-subscribe">comments</span> ${comments}</li>
<li class="subscribe"><span class="span-subscribe">downloads</span> ${downloads}</li>
</ul> 
</li>


    `) .join("")

}
