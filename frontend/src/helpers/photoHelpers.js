import axios from 'axios';

export const findPhoto = (photos, photoId) => {
  const photo = { ...photos[photoId] };
  return photo;
};

export const fetchPhotos = (endpoint, setList) => {
  axios.get(endpoint)
  .then((res) => {
    setList(res.data);
  })
}