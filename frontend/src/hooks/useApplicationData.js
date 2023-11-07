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
      return { ...state, favList: [...state.favList, action.photoId] }

    case FAV_PHOTO_REMOVED:
      return { favList: [() => {state.favList.filter((photo) => photo !== action.photoId)}] }

    case SET_PHOTO_DATA:
      return { ...state, photos: action.photos }

    case SET_TOPIC_DATA:
      return { ...state, topics: action.topics }

    case SELECT_PHOTO:
      return { ...state, viewPhoto: action.photo }

    case DISPLAY_PHOTO_DETAILS:
      return { ...state, setShow: action.show }

    default:
      throw new Error(
        `Tried to reduce with unsupported action type: ${action.type}`
      );
  }
}

const initialState = {
  favList: [],
  photos: [],
  topics: [],
  photo: {id: 0, user: 0, urls: 0, location: 0},
  show: false,
}

const useApplication = () => {

  const [state, dispatch] = useReducer(reducer, initialState);

  const favPhotoAdd = (photoId) => {
    dispatch({type: FAV_PHOTO_ADDED, photoId: photoId});
  };

  const favPhotoDelete = (photoId) => {
    dispatch({type: FAV_PHOTO_REMOVED, photoId: photoId});
  };

  const setPhotos = (photos) => {
    dispatch({type: SET_PHOTO_DATA, photos: photos});
  };

  const setTopics = (topics) => {
    dispatch({type: SET_TOPIC_DATA, topics: topics});
  };

  const selectPhoto = (photo) => {
    dispatch({type: SELECT_PHOTO, photo: photo});
  };

  const displayPhoto = (show) => {
    dispatch({type: DISPLAY_PHOTO_DETAILS, show: show});
  };

  return {
    state,
    favPhotoAdd,
    favPhotoDelete,
    setPhotos,
    setTopics,
    selectPhoto,
    displayPhoto
  };
}

export default useApplication;