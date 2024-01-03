import React from "react";

import "../styles/HomeRoute.scss";
import TopNavigation from "components/TopNavigationBar";
import PhotoList from "components/PhotoList";

const HomeRoute = (props) => {
  const { photos, topics, setPhotoList, change, setChange } = props;

  return (
    <div className="home-route">
      <TopNavigation
        topics={topics}
        setPhotoList={setPhotoList}
        change={change}
      />
      <PhotoList photos={photos} change={change} setChange={setChange} />
    </div>
  );
};

export default HomeRoute;
