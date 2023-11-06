import React, { useCallback, useState } from 'react';

import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';
import { findPhoto } from 'helpers/photoHelpers';

function PhotoFavButton(props) {
  const { photoId, useApplicationData } = props;
  const thisPhoto = findPhoto(useApplicationData.photos, photoId);

  const addFav = (key) => { useApplicationData.updateToFavPhotoIds.setFavList({ ...favList, [key]: thisPhoto })};

  const deleteFav = (key) => { useApplicationData.updateToFavPhotoIds.setFavList({ ...favList, [key]: undefined })};


  const [liked, setLike] = useState(false);
  const switchLike = () => {
    setLike(liked === false ? true : false);
    if (liked === true) {
      deleteFav(thisPhoto.id);
    } else if (liked === false) {
      addFav(thisPhoto.id);
    }
  };

  return (
    <div onClick={switchLike} className="photo-list__fav-icon">
      <div className="photo-list__fav-icon-svg">
        {liked === true && <FavIcon className={"true"} selected={true}/>}
        {liked === false && <FavIcon className={"false"} selected={false}/>}
      </div>
    </div>
  );
}

export default PhotoFavButton;