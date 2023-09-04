import { galleryItems } from "./gallery-items.js";

const galleryContainer = document.querySelector(".gallery");

// Создание разметки
function creatGalleryEl(arr) {
  return arr
    .map(
      ({ preview, original, description }) =>
        `
        <li class="gallery__item">
        <a class="gallery__link" href="${original}">
          <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="I${description}"
          />
        </a>
      </li>
        `
    )
    .join("");
}

// Добавление в ДОМ
galleryContainer.insertAdjacentHTML("beforeend", creatGalleryEl(galleryItems));

// Делегирование получение ссылки на большое изображение
galleryContainer.addEventListener("click", onGalleryContainerClick);

function onGalleryContainerClick(evt) {
  // Запрет на переход по ссылке
  evt.preventDefault();

  // Забираю значение data-sourse
  const oringinalImgSrc = evt.target.dataset.source;

  // Создаю модалку с новым размером изображения
  const instance = basicLightbox.create(
    `
      <div class="modal">
      <img src="${oringinalImgSrc}" width="1200">
      </div>
  `,
    {
      onShow: () => {
        document.addEventListener("keydown", onEscapePress);
      },
    },
    {
      onClose: () => {
        document.removeEventListener("keydown", onEscapePress);
      },
    }
  );

  instance.show();

  function onEscapePress(evt) {
    if (evt.code === "Escape") {
      instance.close();
    }
  }
}
