import React, { useCallback, useState } from 'react';

import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton(props) {
  const {  } = props;

  const [liked, setPhoto] = useState(false);
  const switchLike = () => setPhoto(liked === true ? false : true);

  return (
    <div onClick={switchLike} className="PhotoFavButton photo-list__fav-icon">
      <div className="photo-list__fav-icon-svg">
        {liked === true && <FavIcon className={"true"} selected={true}/>}
        {liked === false && <FavIcon className={"false"} selected={false}/>}
      </div>
    </div>
  );
}

export default PhotoFavButton;