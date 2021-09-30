import { galleryItems } from "./gallery-items.js";
// Change code below this line

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
let instance;
function onClick(evt) {
  evt.preventDefault();
  const isBigImg = evt.target.classList.contains("gallery__image");
  if (!isBigImg) {
    return;
  }
  const sourceEl = (evt.target.dataset.source)
const instance = basicLightbox.create(`
  <div class="modal">
  <img src="${sourceEl}">
  </div>
`)

instance.show();

window.addEventListener('keydown', function(e){
  
      if((e.key=='Escape'||e.key=='Esc')){
          e.preventDefault();
          instance.close()
      }
  })

}
 
// window.addEventListener('keydown', function(e){
  
//     if((e.key=='Escape'||e.key=='Esc')){
//         e.preventDefault();
//         instance.close()
//     }
// })


