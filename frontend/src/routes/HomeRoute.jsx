import React from "react";

import "../styles/HomeRoute.scss";
import TopNavigation from "components/TopNavigationBar";
import PhotoList from "components/PhotoList";

const HomeRoute = (props) => {
  const { photos, topics, setPhotoList } = props;

  return (
    <div className="home-route">
      <TopNavigation topics={topics} setPhotoList={setPhotoList} />
      <PhotoList photos={photos} />
    </div>
  );
};

export default HomeRoute;
