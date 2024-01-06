import React, { useEffect, useState, useContext } from "react";

import FavIcon from "./FavIcon";
import "../styles/PhotoFavButton.scss";
import { searchFavList } from "helpers/helpers";
import { favContext } from "App";

function PhotoFavButton(props) {
  const { photo } = props;

  const { favList, favPhotoAdd, favPhotoDelete } = useContext(favContext);

  // Manage favList state using FavIcon button and liked state
  const [liked, setLike] = useState(false);


  useEffect(() => {
    searchFavList(favList, photo.id) ? setLike(true) : setLike(false);
  }
  , [favList]);

  const switchLike = () => {
    setLike(!liked);
    liked ? favPhotoDelete(photo.id) : favPhotoAdd(photo.id);
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
