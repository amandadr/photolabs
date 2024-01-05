import React, { useState } from "react";

import FavIcon from "./FavIcon";
import "../styles/PhotoFavButton.scss";
import { findPhoto } from "helpers/helpers";
import useFavList from "hooks/useFavList";

function PhotoFavButton(props) {
  const { photo } = props;

  const { favList, favPhotoAdd, favPhotoDelete } = useFavList();

  // Manage favList state using FavIcon button
  const [liked, setLike] = useState(false);
  const switchLike = () => {
    setLike(liked === false ? true : false);
    if (liked === true) {
      favPhotoDelete(photo.id);
    } else if (liked === false) {
      favPhotoAdd(photo.id);
    }
  };

  return (
    <div onClick={switchLike} className="photo-list__fav-icon">
      <div className="photo-list__fav-icon-svg">
        <FavIcon className={"true"} selected={liked} />
      </div>
    </div>
  );
}

export default PhotoFavButton;
