import { useState, useEffect } from "react";
import { findPhoto, fetchPhotos } from "helpers/helpers";

const usePhoto = () => {
  // first, get and set the photo list from the API
  let photos = [];

  fetchPhotos().then((res) => {
    photos = res;
  });

  const [statePhoto, setPhoto] = useState({
    id: 0,
    user: 0,
    urls: 0,
    location: 0,
  });

  // Then, set the statePhoto to the photo from the list with the given id from the DOM click - this ensures that similar photos are always displayed in the modal

  const setStatePhoto = (photo) => {
    const listPhoto = findPhoto(photos, photo.id);
    setPhoto(listPhoto);
  };

  return {
    statePhoto,
    setStatePhoto,
  };
};

export default usePhoto;
