import React from "react";

import "../styles/PhotoList.scss";
import PhotoListItem from "./PhotoListItem";

const PhotoList = (props) => {
  const { photos, toggleModal, setStatePhoto } = props;

  const parsedPhotos =
    Array.isArray(photos) &&
    photos.map((photo) => (
      <PhotoListItem
        key={photo.id}
        photo={photo}
        toggleModal={toggleModal}
        setStatePhoto={setStatePhoto}
      />
    ));

  return <ul className="PhotoList photo-list">{parsedPhotos}</ul>;
};

export default PhotoList;
