import React, { useState } from 'react';

import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';
import { findPhoto } from 'helpers/photoHelpers';

function PhotoFavButton(props) {
  const { photoId, photoList, favList, setFavList, selected} = props;
  const thisPhoto = findPhoto(photoList, photoId);

  const addFav = () => { setFavList([...favList, thisPhoto.id]);};

  const deleteFav = (photoId) => {
    const updatedFavs = favList.filter((photo) => photo !== photoId);
    setFavList(() => [...updatedFavs]);
  }

  const [liked, setLike] = useState(false);
  const switchLike = () => {
    setLike(liked === false ? true : false);
    if (liked === true) {
      deleteFav(thisPhoto.id);
    } else if (liked === false) {
      addFav(thisPhoto.id);
    }
  };
  console.log("favList", favList, "thisPhoto", thisPhoto)

  return (
    <div onClick={switchLike} className="photo-list__fav-icon">
      <div className="photo-list__fav-icon-svg">
        <FavIcon className={"true"} selected={selected ?? liked === true} />
      </div>
    </div>
  );
}

export default PhotoFavButton;