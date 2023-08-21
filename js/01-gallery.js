import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryEl = document.querySelector(".gallery");

function createGallery() {
  let imgCard = galleryItems
    .map(({ preview, original, description }) => {
      return `<div class="gallery__item">
  <a class="gallery__link" href=${original}>
    <img
      class="gallery__image"
      src=${preview}
      data-source=${original}
      alt=${description}
    />
  </a>
</div>`;
    })
    .join("");
  galleryEl.innerHTML = imgCard;
}
createGallery();

galleryEl.addEventListener("click", onImgClick);
function onImgClick(event) {
  event.preventDefault();

  const srcOriginalImages = event.target.dataset.source;

  const instance = basicLightbox.create(`
    <img src=${srcOriginalImages} width="800" height="600">
    `);

  instance.show();

  document.addEventListener("keydown", closeModalEsc);

  function closeModalEsc(e) {
    if (e.code !== "Escape") return;
    else {
      instance.close();

      document.removeEventListener("keydown", closeModalEsc);
    }
  }
}
