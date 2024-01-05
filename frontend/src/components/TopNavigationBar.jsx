import React, { useCallback } from "react";

import "../styles/TopNavigationBar.scss";
import TopicList from "./TopicList";
import FavBadge from "./FavBadge";
import { fetchPhotos } from "helpers/helpers";
import useFavList from "hooks/useFavList";

const TopNavigation = (props) => {
  const { topics, setPhotoList } = props;

  const { favList } = useFavList();

  const favOnPage = () => {
    if (favList.length > 2) {
      return true;
    } else {
      return false;
    }
  };

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
      <FavBadge favOnPage={favOnPage} />
    </div>
  );
};

export default TopNavigation;
