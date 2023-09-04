import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryContainer = document.querySelector(".gallery");

// Создание разметки
function creatGalleryEl(arr) {
  return arr
    .map(
      ({ preview, original, description }) =>
        `
        <li class="gallery__item">
        <a class="gallery__link" href="${original}">
           <img class="gallery__image" src="${preview}" alt="${description}" />
        </a>
     </li>
          `
    )
    .join("");
}

// Добавление в ДОМ
galleryContainer.insertAdjacentHTML("beforeend", creatGalleryEl(galleryItems));

// инициализирую библиотеку с описанием и анимацией
let gallery = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});

// Добавление слушателя событий и делегирование
galleryContainer.addEventListener("click", onGalleryContainerClick);

function onGalleryContainerClick(evt) {
  evt.preventDefault();

}
