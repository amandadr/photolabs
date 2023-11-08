import React, { useState } from 'react';

import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';
import useWow from 'hooks/useWow';
import { findPhoto } from 'helpers/photoHelpers';

function PhotoFavButton(props) {
  const { photoId, favList, favPhotoAdd, favPhotoDelete } = props;

  // Manage favList state using FavIcon
  const [liked, setLike] = useState(false);
  const switchLike = () => {
    setLike(liked === false ? true : false);
    if (liked === true) {
      favPhotoDelete(photoId);
    } else if (liked === false) {
      favPhotoAdd(photoId);
      sayWow();
    }
  };

  const { sayWow } = useWow();


  return (
    <div onClick={switchLike} className="photo-list__fav-icon">
      <div className="photo-list__fav-icon-svg">
        <FavIcon className={"true"} selected={findPhoto(favList, photoId)}/>
      </div>
    </div>
  );
}

export default PhotoFavButton;