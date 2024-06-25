import axios from 'axios';

const API_URL = 'https://api.unsplash.com';
const CLIENT_ID = '1oFBWuqiNfcq5zRF7vuxirv0jgAeAK2oAAYJUQT-mIg'; 

export const searchImages = (query, page = 1) =>
  axios.get(`${API_URL}/search/photos`, {
    params: {
      query,
      page,
      per_page: 6,
      client_id: CLIENT_ID,
    },
  });

export const getImageDetails = (id) =>
  axios.get(`${API_URL}/photos/${id}`, {
    params: {
      client_id: CLIENT_ID,
    },
  });
