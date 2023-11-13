import { useReducer } from 'react';

export const FAV_PHOTO_ADDED = 'favPhotoAdd';
export const FAV_PHOTO_REMOVED = 'favPhotoDelete';
export const SET_PHOTO_DATA = 'setPhotos';
export const SET_TOPIC_DATA = 'setTopics';
export const SELECT_PHOTO = 'selectPhoto';
export const DISPLAY_PHOTO_DETAILS = 'displayPhoto';

const reducer = (state, action) => {

  switch (action.type) {
    case FAV_PHOTO_ADDED:
      const oldFavList = JSON.parse(localStorage.getItem('favList'));
      const addFavList = [...oldFavList, action.photoId];
      localStorage.setItem("favList", JSON.stringify(addFavList));
      console.log(addFavList);
      return { ...state, favList: addFavList };
      
    case FAV_PHOTO_REMOVED:
      const currentFavList = JSON.parse(localStorage.getItem('favList'));
      const removeFavList = currentFavList.filter((photo) => photo !== action.photoId);
      localStorage.setItem("favList", JSON.stringify(removeFavList));
      console.log(removeFavList);
      return { ...state, favList: removeFavList };

    case SELECT_PHOTO:
      return { ...state, photo: action.photo };

    case DISPLAY_PHOTO_DETAILS:
      return { ...state, show: action.show };

    default:
      throw new Error(
        `Tried to reduce with unsupported action type: ${action.type}`
      );
  }
}

const initialState = {
  favList: [],
  photo: {id: 0, user: 0, urls: 0, location: 0},
  show: false,
}

const useApplicationData = () => {

  const [ state, dispatch ] = useReducer(reducer, initialState);

  state.favList = localStorage.getItem('favList');

  const favPhotoAdd = (photoId) => {
    dispatch({type: FAV_PHOTO_ADDED, photoId: photoId});
  };

  const favPhotoDelete = (photoId) => {
    dispatch({type: FAV_PHOTO_REMOVED, photoId: photoId})
  };

  const selectPhoto = (photo) => {
    dispatch({type: SELECT_PHOTO, photo: photo});
  };

  const displayPhoto = (show) => {
    setTimeout(() => {dispatch({type: DISPLAY_PHOTO_DETAILS, show: show})}, 300)
  };

  return {
    state,
    favPhotoAdd,
    favPhotoDelete,
    selectPhoto,
    displayPhoto
  };
}

export default useApplicationData;