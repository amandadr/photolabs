import { useReducer } from "react";

export const SET_FAV_LIST = "setFavList";
export const FAV_PHOTO_ADDED = "favPhotoAdd";
export const FAV_PHOTO_REMOVED = "favPhotoDelete";

const reducer = (state, action) => {
  switch (action.type) {
    case SET_FAV_LIST:
      return [...action.favList];
  
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
      return [...addFavList];

    case FAV_PHOTO_REMOVED:
      const currentFavList = JSON.parse(localStorage.getItem("favList"));
      const removeFavList = currentFavList.filter(
        (photo) => photo !== action.photoId
      );
      localStorage.setItem("favList", JSON.stringify(removeFavList));
      return [...removeFavList];

    default:
      throw new Error(
        `Tried to reduce with unsupported action type: ${action.type}`
      );
  }
};


const useFavList = () => {
  const [favList, dispatch] = useReducer(reducer, []);

  // favList = localStorage.getItem("favList") || [];

  const setFavList = (favList) => {
    dispatch({ type: SET_FAV_LIST, favList: favList });
  };

  const favPhotoAdd = (photoId) => {
    dispatch({ type: FAV_PHOTO_ADDED, photoId: photoId });
  };

  const favPhotoDelete = (photoId) => {
    dispatch({ type: FAV_PHOTO_REMOVED, photoId: photoId });
  };

  return {
    favList,
    favPhotoAdd,
    favPhotoDelete,
    setFavList,
  };
};

export default useFavList;
