import axios from 'axios';

export const findPhoto = (photos, photoId) => {
  const photo = photos.filter(photo => photo.id === photoId)
  return photo[0];
};

export const fetchPhotos = (endpoint, setList) => {
  axios.get(endpoint)
  .then((res) => {
    setList(res.data);
  })
}