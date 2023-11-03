import React from 'react';
import FavIcon from './FavIcon';

import '../styles/FavBadge.scss';

const FavBadge = ({ ifFavPhotoExist }) => {
  return (
    <div className='fav-badge'>
      <FavIcon displayAlert={!!ifFavPhotoExist} selected={true}/>
    </div>
  ) 
};

export default FavBadge;