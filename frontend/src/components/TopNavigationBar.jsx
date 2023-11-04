import React from 'react';

import '../styles/TopNavigationBar.scss'
import TopicList from './TopicList';
import FavBadge from './FavBadge';

const TopNavigation = (props) => {
  const { topics, favList, setFavList } = props;

  const favOnPage = () => {
    for (const key in favList) {
      if (favList[key] !== undefined)
        return true;
    }
    return false;
  }

  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>
      <TopicList topics={topics}/>
      <FavBadge favOnPage={favOnPage}/>
    </div>
  )
}

export default TopNavigation;