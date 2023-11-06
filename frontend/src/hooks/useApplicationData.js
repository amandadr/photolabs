import React, { useState } from "react"
// DATA
import mockPhotos from 'data/photos';
import mockTopics from 'data/topics';

const useApplicationData = () => {
  // function useControlledInput(initial) {
  //   const [value, setValue] = useState(initial);
  
  //   return {
  //     value,
  //     onChange: (event) => setValue(event.target.value)
  //   };
  // }

  // const state = [currentState, setState] = useState(state);
  const onPhotoSelect = () => {[viewPhoto, setPhoto] = useState(mockPhotos[0])};
  const updateToFavPhotoIds = () => {[favList, setFavList] = useState({})};
  const onModal = () => {[show, setShow] = useState(false)};

  const handleShow = () => setShow(true);

  const photos = mockPhotos;
  const topics = mockTopics;

  return {
    // state,
    onPhotoSelect,
    updateToFavPhotoIds,
    onModal,
    handleShow,
    photos,
    topics
  };
};

export default useApplicationData;