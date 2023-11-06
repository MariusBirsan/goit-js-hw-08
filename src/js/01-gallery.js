// Add imports above this line
import {galleryItems} from './gallery-items';

// Change code below this line
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const galleryContainer = document.querySelector("ul.gallery");
const photosMarkup = createGalleryItem(galleryItems);

function createGalleryItem(element) {
    return element
    .map(({preview, original, description}) => {
        return `
        <li>
            <a class="gallery__item" href="${original}">
                <img class="gallery__image" src="${preview}" alt="${description}" />
            </a>
        </li>`;
    })
    .join("");
}

galleryContainer.insertAdjacentHTML("beforeend", photosMarkup);

const galleryHandler =  new SimpleLightbox(".gallery a", {
    captionsData: 'alt',
    captionsDelay: 250
});

galleryHandler.on('show.simplelightbox');
