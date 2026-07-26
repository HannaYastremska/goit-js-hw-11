import { getImagesByQuery } from './js/pixabay-api.js';
import {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
} from './js/render-functions.js';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const searchForm = document.querySelector('.form');

searchForm.addEventListener('submit', handleSearch);

function handleSearch(event) {
  event.preventDefault();

  const query = event.currentTarget.elements['search-text'].value.trim();
  if (query === '') {
    iziToast.warning({
      title: 'Warning',
      message: 'Please enter a search query!',
      position: 'topRight',
    });
    return;
  }
  clearGallery();
  showLoader();

  getImagesByQuery(query)
    .then(data => {
      if (data.hits.length === 0) {
        iziToast.error({
          title: 'Error',
          message:
            'Sorry, there are no images matching your search query. Please try again!',
          position: 'topRight',
          backgroundColor: '#ef4040',
          titleColor: '#ffffff',
          messageColor: '#ffffff',
        });
        return;
      }
      createGallery(data.hits);
    })
    .catch(error => {
      iziToast.error({
        title: 'Error',
        message: 'Failed to fetch images. Please try again later.',
        position: 'topRight',
      });
      console.error(error);
    })
    .finally(() => {
      hideLoader();
    });

  event.currentTarget.reset();
}
