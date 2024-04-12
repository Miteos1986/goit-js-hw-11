import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";




const BASE_URL = "https://pixabay.com/api/";
const API_KEY = "43311498-bd26fa1e6ae7e25f586fd794c";

const params = new URLSearchParams ({
    key: API_KEY,
    q: "searchImg",
    image_type: "photo",
    orientation: "horizontal",
    safesearch: "true"
})

const url = `${BASE_URL}?${params}`
export function searchPhoto (searchImg){
fetch(url)
  .then((response) => {
    if (!response.ok) {
throw new Error (response.status)
    }
    console.log("ok");
    return response.json();
  })
  .then (data => data.hits)
  .catch (error =>iziToast.error({
    title: 'Error',
    message: 'Sorry, there are no images matching your search query. Please try again!'
    })
)
}

