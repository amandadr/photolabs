import React, { useState } from "react";

import FavIcon from "./FavIcon";
import "../styles/PhotoFavButton.scss";
import { findPhoto } from "helpers/photoHelpers";

function PhotoFavButton(props) {
  const { photoId } = props;

  const { state, favPhotoAdd, favPhotoDelete } = useApplicationData();

  const { favList } = state;

  // Manage favList state using FavIcon button
  const [liked, setLike] = useState(false);
  const switchLike = () => {
    setLike(liked === false ? true : false);
    if (liked === true) {
      favPhotoDelete(photoId);
    } else if (liked === false) {
      favPhotoAdd(photoId);
    }
  };

  return (
    <div onClick={switchLike} className="photo-list__fav-icon">
      <div className="photo-list__fav-icon-svg">
        <FavIcon className={"true"} selected={findPhoto(favList, photoId)} />
      </div>
    </div>
  );
}

export default PhotoFavButton;
