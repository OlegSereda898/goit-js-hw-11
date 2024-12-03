import { fetchImages } from "./js/pixabay-api.js";
import { renderGallery, clearGallery } from "./js/render-functions.js";
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const form = document.querySelector("#search-form");
const gallery = document.querySelector(".gallery");
const loader = document.querySelector(".loader");

let lightbox = new SimpleLightbox(".gallery a");
let currentQuery = "";
let currentPage = 1;

form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const query = e.target.elements.searchQuery.value.trim();
    if (!query) {
        iziToast.error({
            title: "Error",
            message: "Search field cannot be empty!",
            position: "topRight",
            backgroundColor: "#ef4040",
            titleColor: "#ffff",
            messageColor: "#ffff"
        });
    return;
    }

    currentQuery = query;
    currentPage = 1;
    
    try {
    loader.style.display = "block";
    const data = await fetchImages(query);
    loader.style.display = "none";

    if (data.hits.length === 0) {
        iziToast.warning({
            title: "No Results",
            message: "Sorry, there are no images matching your search query.",
            position: "topRight",
            backgroundColor: "#ef4040",
            titleColor: "#ffff",
            messageColor: "#ffff"
        });
        clearGallery(gallery);
        return;
    }

    clearGallery(gallery);
    gallery.innerHTML = renderGallery(data.hits);
    lightbox.refresh();
    } catch (error) {
    loader.style.display = "none";
        iziToast.error({
            title: "Error",
            message: "Something went wrong. Try again later.",
            position: "topRight",
            backgroundColor: "#ef4040",
            titleColor: "#ffff",
            messageColor: "#ffff"
        });
    }
});


