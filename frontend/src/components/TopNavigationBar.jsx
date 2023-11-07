import React, { useCallback } from 'react';

import '../styles/TopNavigationBar.scss'
import TopicList from './TopicList';
import FavBadge from './FavBadge';
import { fetchPhotos } from 'helpers/photoHelpers';

const TopNavigation = (props) => {
  const { topics, favList } = props;

  const favOnPage = () => {
    console.log(favList)
    if (favList[0] === Number()) {
      return true;
    } else {
      return false;
    }
  }

  const url = "http://localhost:8001/api/photos";
  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo" onClick={useCallback(() => {
    fetchPhotos(url, setPhotoList);
  }, [])}>PhotoLabs</span>
      <TopicList topics={topics}/>
      <FavBadge favOnPage={favOnPage}/>
    </div>
  )
}

export default TopNavigation;