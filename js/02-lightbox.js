import { galleryItems } from './gallery-items.js';
// Change code below this line


const galleryElement = document.querySelector(".gallery");
const listGalleryItems = galleryItems
  .map(
    ({ preview, original, description }) =>
      `<li class="gallery__item">
  <a href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a></li>`
  )
  .join("");

galleryElement.insertAdjacentHTML("beforeend", listGalleryItems);

let lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});


console.log(galleryItems);