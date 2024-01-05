import React from "react";

import "../styles/HomeRoute.scss";
import TopNavigation from "components/TopNavigationBar";
import PhotoList from "components/PhotoList";

const HomeRoute = (props) => {
  const { photos, topics, setPhotoList, toggleModal, setStatePhoto } = props;

  return (
    <div className="home-route">
      <TopNavigation topics={topics} setPhotoList={setPhotoList} />
      <PhotoList
        photos={photos}
        toggleModal={toggleModal}
        setStatePhoto={setStatePhoto}
      />
    </div>
  );
};

export default HomeRoute;
