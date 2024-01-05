import axios from 'axios';

export const findPhoto = (photos, photoId) => {
  for (let i = 0; i < photos.length; i++) {
    if (photos[i].id === photoId) {
      return photos[i];
    }
  }
};

export const setTopic = (endpoint, setList) => {
  axios.get(endpoint).then((res) => {
    setList(res.data);
  });
};


// REFACTOR!! Combine into one fetch function

export const fetchPhotos = () => {
  let photos = [];
  return new Promise((resolve, reject) => {
    axios
      .get("http://localhost:8001/api/photos")
      .then((response) => {
        photos = response.data;
        resolve(photos);
      })
      .catch((error) => {
        console.error("Error fetching photos:", error);
        reject(error);
      });
  });
};

export const fetchTopics = () => {
  let topics = [];
  return new Promise((resolve, reject) => {
    axios
      .get("http://localhost:8001/api/topics")
      .then((response) => {
        topics = response.data;
        resolve(topics);
      })
      .catch((error) => {
        console.error("Error fetching topics:", error);
        reject(error);
      });
  });
}