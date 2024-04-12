// Описаний у документації
import iziToast from "izitoast";
// Додатковий імпорт стилів
import "izitoast/dist/css/iziToast.min.css";

const BASE_URL = "https://pixabay.com/api/";
const API_KEY = "43311498-bd26fa1e6ae7e25f586fd794c";

const params = new URLSearchParams ({
    key: API_KEY,
    q: "",
    image_type: "photo",
    orientation: "horizontal",
    safesearch: "true"
})

fetch(`${BASE_URL}?${params}`)
  .then((response) => {
    if (!response.ok) {
throw new Error (response.status)
    }
    console.log("ok");
    return response.json();
  })
  .then (data => console.log(data))
  .catch (error => console.log(error))


