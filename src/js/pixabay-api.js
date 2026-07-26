import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '56863221-91f0530995b67356440c1de64';

export function getImagesByQuery(query) {
  const searchParams = {
    key: API_KEY,
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  };

  return axios
    .get(BASE_URL, { params: searchParams })
    .then(response => response.data);
}
