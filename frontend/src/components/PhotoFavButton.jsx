import React, { useState } from 'react';

import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton(props) {
  const { photoId, favPhotoAdd, favPhotoDelete } = props;

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
        <FavIcon className={"true"} selected={liked === true} />
      </div>
    </div>
  );
}

export default PhotoFavButton;