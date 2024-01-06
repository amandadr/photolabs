import React from 'react';
import FavIcon from './FavIcon';
import { favContext } from "App";

import '../styles/FavBadge.scss';

const FavBadge = () => {
  const { favList } = React.useContext(favContext);

  const notNull = () => {
    for (let i = 0; i < favList.length; i++) {
      if (favList[i] !== null) {
        return true;
      }
    }
    return false;
  }

  const favOnPage = notNull() ? true : false;

  return (
    <div className='fav-badge'>
      <FavIcon displayAlert={favOnPage === true} selected={true}/>
    </div>
  ) 
};

export default FavBadge;