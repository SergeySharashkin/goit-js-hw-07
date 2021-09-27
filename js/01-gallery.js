import { galleryItems } from "./gallery-items.js";
// Change code below this line



console.log(galleryItems);
const galleryEl = document.querySelector(".gallery");
const galleryMarkup = createGalleryItemsMarkup(galleryItems);
galleryEl.insertAdjacentHTML("beforeend", galleryMarkup);
function createGalleryItemsMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`;
    })
    .join("");
}
galleryEl.addEventListener("click", onClick);
function onClick(evt) {
  evt.preventDefault();
  const isBigImg = evt.target.classList.contains("gallery__image");
  if (!isBigImg) {
    return;
  }
  console.log(evt.target.dataset.source);
}


// const styleEL = document.createElement("link");
// styleEL.rel = "stylesheet";
// styleEL.src = "https://cdn.jsdelivr.net/npm/basiclightbox@5.0.4/dist/basicLightbox.min.css";
// document.head.appendChild(styleEL);
// const scriptEl = document.createElement("script");
// scriptEl.src = "https://cdn.jsdelivr.net/npm/basiclightbox@5.0.4/dist/basicLightbox.min.js";
// document.body.appendChild(scriptEl);


import * as basicLightbox from 'basiclightbox'
const instance = basicLightbox.create(`
    <div class="modal">
    <img  src="${isBigImg}">
    </div>
`)

instance.show()
