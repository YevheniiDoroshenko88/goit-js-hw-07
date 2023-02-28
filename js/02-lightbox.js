import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery = document.querySelector('.gallery');

gallery.innerHTML = galleryItems
  .map(({preview, original, description}) => {
    return `
    <li class = "gallery__item">
    <a class = "gallery__link" href= "${original}">
    <img  
    class = "gallery__image" 
    data-source = "${original}" 
    src = ${preview} 
    alt = "${description}">
    </a>
    </li>
    `;
  })
  .join('');

  const lightbox = new SimpleLightbox('.gallery a', {
    captionPosition: 'bottom',
    captionsData: 'alt',
    captionDelay: 250,
});

console.log(galleryItems);
