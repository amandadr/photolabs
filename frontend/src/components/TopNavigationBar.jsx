import React, { useCallback } from 'react';

import '../styles/TopNavigationBar.scss'
import TopicList from './TopicList';
import FavBadge from './FavBadge';
import { fetchPhotos } from 'helpers/photoHelpers';
import useApplicationData from 'hooks/useApplicationData';

const TopNavigation = (props) => {
  const { topics, setPhotoList } = props;

  const { state } = useApplicationData();

  const { favList } = state;

  const favOnPage = () => {
    if (favList.length > 2) {
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
      <TopicList topics={topics} setPhotoList={setPhotoList}/>
      <FavBadge favOnPage={favOnPage}/>
    </div>
  )
}

export default TopNavigation;