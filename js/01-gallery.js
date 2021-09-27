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
let isBigImg;
function onClick(evt) {
  evt.preventDefault();
  isBigImg = evt.target.classList.contains("gallery__image");
  if (!isBigImg) {
    return;
  }
  console.log(isBigImg)
  const instance = basicLightbox.create(`
  <div class="modal">
  <img  src="${isBigImg}">
  </div>
`)

instance.show()}
  




