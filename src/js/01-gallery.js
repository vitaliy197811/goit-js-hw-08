import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);


const gallery = document.querySelector('.gallery');

gallery.insertAdjacentHTML('beforeend', createItems(galleryItems));

function createItems (item) {
    return galleryItems
    .map(({preview, original, description}) => {
        return `<div class="gallery__item">
        <a class="gallery__link" href="${original}">
        <img class="gallery__image" src="${preview}" data-sourse="${original}" alt="${description}">
        </a>
        </div>`;
    })
    .join('');
}

const lightbox = new SimpleLightbox(".gallery a", {
    captionsData: "alt",
    captionType: "alt",
    captionDelay: 250,
});