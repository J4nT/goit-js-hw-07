import { galleryItems } from './gallery-items.js';
// Change code below this line


//Dostęp do dokumentu
const gallery = document.querySelector(".gallery");
//Tworzenie tablicy danych i znaczników galerii
const listGalleryItems = galleryItems.map(
  (galleryItem) =>
    `<li class="gallery__item">
      <a class="gallery__link" href="${galleryItem.original}">
      <img
        class="gallery__image"
        src="${galleryItem.preview}" 
        alt="${galleryItem.description}"
        data-source="${galleryItem.original}"
        >
        </img>
        </a>
     </li>`
).join('');
//Otwieranie okna modalnego po kliknięciu
document.querySelector('.gallery').addEventListener('click', function (event) {
    if (event.target.tagName === 'IMG') {
    event.preventDefault();
    const imageUrl = event.target.dataset.source;
    openModal(imageUrl);
  }
});
function openModal(imageUrl) {
  const instance = basicLightbox.create(`<img src="${imageUrl}" alt="Image">`);
  instance.element().addEventListener('click', function (event) {
    if (event.target === instance.content) {
      instance.close();
    }
  });
    window.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') {
      instance.close();
    }
  });
  
  instance.show();
}


console.log(galleryItems);