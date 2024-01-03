import { useEffect, useReducer } from "react";

// TOMORROW:
// Stash changes, bring them to another branch, then merge main into that branch to pick through which changes are worth keeping - it's so broken right now and I don't remember where I started / when it was working

// REFACTOR!!!!!!
// favList should have its own reducer

export const SET_FAV_LIST = "setFavList";
export const FAV_PHOTO_ADDED = "favPhotoAdd";
export const FAV_PHOTO_REMOVED = "favPhotoDelete";
export const SET_PHOTO_DATA = "setPhotos";
export const SET_TOPIC_DATA = "setTopics";
export const SELECT_PHOTO = "selectPhoto";
export const DISPLAY_PHOTO_DETAILS = "displayPhoto";
export const DISPLAY_FAV_BADGE = "displayFavBadge";

const reducer = (state, action) => {
  switch (action.type) {
    case SET_FAV_LIST:
      // return { ...state, favList: JSON.parse(localStorage.getItem("favList")) || [] };
      return { ...state, favList: action.favList };

    case FAV_PHOTO_ADDED:
      const oldFavList = JSON.parse(localStorage.getItem("favList"));
      let addFavList;
      if (oldFavList === null) {
        addFavList = [action.photoId];
      } else {
        if (!oldFavList.includes(action.photoId)) {
          addFavList = [...oldFavList, action.photoId];
        } else {
          addFavList = [...oldFavList];
        }
      }
      localStorage.setItem("favList", JSON.stringify(addFavList));

      return { ...state, favList: addFavList };

    case FAV_PHOTO_REMOVED:
      const currentFavList = JSON.parse(localStorage.getItem("favList"));
      const removeFavList = currentFavList.filter(
        (photo) => photo !== action.photoId
      )
      localStorage.setItem("favList", JSON.stringify(removeFavList));
      return { ...state, favList: removeFavList };

    case SELECT_PHOTO:
      return { ...state, photo: action.photo };

    case DISPLAY_PHOTO_DETAILS:
      return { ...state, show: action.show };

    case DISPLAY_FAV_BADGE:
      return { ...state, favAlert: action.favAlert };

    default:
      throw new Error(
        `Tried to reduce with unsupported action type: ${action.type}`
      );
  }
};

const initialState = {
  favList: [],
  photo: { id: 0, user: 0, urls: 0, location: 0 },
  show: false,
  favAlert: false,
};

const useApplicationData = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  // state.favList = JSON.parse(localStorage.getItem("favList")) || [];
  
  const setFavList = (favList) => {
    const newFavList = [...favList];
    dispatch({ type: SET_FAV_LIST, favList: newFavList });
  }

  useEffect(() => {
    const newFavList = [...JSON.parse(localStorage.getItem("favList"))] || [];
    dispatch({ type: SET_FAV_LIST, favList: newFavList });
  }, [state.favList]);
  console.log("state.favList", state.favList);

  
  const favPhotoAdd = (photoId) => {
    dispatch({ type: FAV_PHOTO_ADDED, photoId: photoId });
  };

  const favPhotoDelete = (photoId) => {
    dispatch({ type: FAV_PHOTO_REMOVED, photoId: photoId });
  };

  const selectPhoto = (photo) => {
    dispatch({ type: SELECT_PHOTO, photo: photo });
  };

  const displayPhoto = (show) => {
    setTimeout(() => {
      dispatch({ type: DISPLAY_PHOTO_DETAILS, show: show });
    }, 200);
  }

  const displayFavBadge = (favAlert) => {
    dispatch({ type: DISPLAY_FAV_BADGE, favAlert: favAlert });
  };


  return {
    state,
    setFavList,
    favPhotoAdd,
    favPhotoDelete,
    selectPhoto,
    displayPhoto,
    displayFavBadge,
  };
};


export default useApplicationData;
