import { galleryItems } from './gallery-items.js';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

// Change code below this line

const galleryContainer = document.querySelector('.gallery');

const getGalleryItem = ({ preview, original, description }) => {
  return `<li class="gallery__item">
    <a class="gallery__link" href="${original}">
      <img class="gallery__image" src="${preview}" alt="${description}" "/>
    </a>
  </li>`;
};

const getGalleryItems = () => {
  return Array.from(galleryItems, item => getGalleryItem(item)).join('');
};

galleryContainer.innerHTML = getGalleryItems();

new SimpleLightbox('.gallery a', { captionsData: 'alt', captionDelay: 250 });
