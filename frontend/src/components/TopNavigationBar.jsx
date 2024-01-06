import React, { useCallback, useEffect } from "react";

import "../styles/TopNavigationBar.scss";
import TopicList from "./TopicList";
import FavBadge from "./FavBadge";
import { fetchPhotos } from "helpers/helpers";

const TopNavigation = (props) => {
  const { topics, setPhotoList } = props;

  // FIX: FavBadge isn't rerendered when favList is updated and
  // hearts aren't selected on refresh

  return (
    <div className="top-nav-bar">
      <span
        className="top-nav-bar__logo"
        onClick={useCallback(() => {
          fetchPhotos().then((photos) => {
            setPhotoList(photos);
          });
        }, [])}
      >
        PhotoLabs
      </span>
      <TopicList topics={topics} setPhotoList={setPhotoList} />
      <FavBadge />
    </div>
  );
};

export default TopNavigation;
