import React from "react";

import "../styles/PhotoList.scss";
import PhotoListItem from "./PhotoListItem";

const PhotoList = (props) => {
  const { photos, change, setChange } = props;

  const parsedPhotos =
    // Array.isArray(photos) &&
    photos.map((photo) => (
      <PhotoListItem key={photo.id} photo={photo} change={change} setChange={setChange} />
    ));

  return <ul className="PhotoList photo-list">{parsedPhotos}</ul>;
};

export default PhotoList;
