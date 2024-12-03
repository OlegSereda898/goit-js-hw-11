import iziToast from "izitoast";

import "izitoast/dist/css/iziToast.min.css";

import SimpleLightbox from "simplelightbox";

import "simplelightbox/dist/simple-lightbox.min.css";

export function renderGallery(images) {
    return images
    .map(
        ({ webformatURL, largeImageURL, tags, likes, views, comments, downloads }) =>
        `<a href="${largeImageURL}" class="gallery__item">
            <img src="${webformatURL}" alt="${tags}" loading="lazy" />
            <div class="info">
            <p><b>Likes:</b> ${likes}</p>
            <p><b>Views:</b> ${views}</p>
            <p><b>Comments:</b> ${comments}</p>
            <p><b>Downloads:</b> ${downloads}</p>
            </div>
        </a>`
    )
    .join("");
}

export function clearGallery(container) {
    container.innerHTML = "";
}
