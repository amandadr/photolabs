import React from "react";

import "../styles/PhotoList.scss";
import PhotoListItem from "./PhotoListItem";

const PhotoList = (props) => {
  const { photos, favList, favPhotoAdd, favPhotoDelete, selectPhoto, displayPhoto } = props;

  const parsedPhotos =
    Array.isArray(photos) &&
    photos.map((photo) => (
      <PhotoListItem
      key={photo.id}
      photoList={photos}
      photo={photo}
      {...photo}
      favList={favList}
      favPhotoAdd={favPhotoAdd} 
      favPhotoDelete={favPhotoDelete}
      selectPhoto={selectPhoto}
      displayPhoto={displayPhoto}
    />
    ));

  return (<ul className="PhotoList photo-list">{parsedPhotos}</ul>);
}

export default PhotoList;
