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
const styleEL = document.createElement("link");
styleEL.rel = "stylesheet";
styleEL.src = "/node_modules/basiclightbox/dist/basicLightbox.min.css";
const scriptEl = document.createElement("script");
scriptEl.src = "/node_modules/basiclightbox/dist/basicLightbox.min.css";
document.body.appendChild(scriptEl);
// event.preventDefault()
// document.querySelector('button.image').onclick = () => {

// 	basicLightbox.create(`
// 		<img width="1400" height="900" src="https://placehold.it/1400x900">
// 	`).show()

// }
/* <button class="image">img</button> */
