import React, { useCallback, useState } from 'react';

import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';
import { findPhoto } from 'helpers/photoHelpers';

function PhotoFavButton(props) {
  const { photoId, photoList, favList, setFavList } = props;
  const thisPhoto = findPhoto(photoList, photoId);

  const addFav = (photoId) => { setFavList([ ...favList, thisPhoto[0] ]); console.log(favList)};

  const deleteFav = (photoId) => {
    const updatedFavs = favList.filter((photo) => photo.id !== photoId);
    setFavList(() => [...updatedFavs]);
    console.log(updatedFavs)
  }

  const [liked, setLike] = useState(false);
  const switchLike = () => {
    setLike(liked === false ? true : false);
    if (liked === true) {
      deleteFav(thisPhoto[0].id);
    } else if (liked === false) {
      addFav(thisPhoto[0].id);
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