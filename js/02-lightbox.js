import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryEl = document.querySelector(".gallery");
const galleryMarkup = createGalleryItemsMarkup(galleryItems);

galleryEl.insertAdjacentHTML("beforeend", galleryMarkup);
function createGalleryItemsMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<a class="gallery__item" href="${original}">
      <img class="gallery__image" src="${preview}" alt="${description}" />
    </a>`;
    })
    .join("");
}
// let lightbox = new SimpleLightbox('.gallery a');
// import SimpleLightbox from "simplelightbox";
let gallery = new SimpleLightbox('.gallery a');
gallery.on('show.simplelightbox', function () {
   gallery.captions	= 1;
  
    console.log(gallery.captions)
})

// galleryEl.addEventListener("click", onClick);
// function onClick(evt) {
//     evt.preventDefault();
//     const isBigImg = evt.target.classList.contains("gallery__image");
//     if (!isBigImg) {
//       return;
//     }
//     const sourceEl = (evt.target.dataset.source)
//     const instance = basicLightbox.create(`
//     <div class="modal">
//     <img src="${sourceEl}">
//     </div>
//   `)
  
//   instance.show()
// }