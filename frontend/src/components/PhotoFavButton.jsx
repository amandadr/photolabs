import React, { useCallback, useState } from 'react';

import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton(props) {
  const { like, switchLike } = props;

  return (
    <div onClick={switchLike} className="PhotoFavButton photo-list__fav-icon">
      <div className="photo-list__fav-icon-svg">
        {like === true && <FavIcon className={"true"} selected={true}/>}
        {like === false && <FavIcon className={"false"} selected={false}/>}
      </div>
    </div>
  );
}

export default PhotoFavButton;