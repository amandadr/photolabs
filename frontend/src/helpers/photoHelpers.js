import axios from 'axios';

export const findPhoto = (photos, photoId) => {
  if (photos !== undefined) {
    return photos.indexOf(photoId) > -1;
  } else {
    return false;
  }
};

export const fetchPhotos = (endpoint, setList) => {
  axios.get(endpoint)
  .then((res) => {
    setList(res.data);
  })
}