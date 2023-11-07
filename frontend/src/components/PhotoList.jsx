import React from "react";

import "../styles/PhotoList.scss";
import PhotoListItem from "./PhotoListItem";

// const sampleDataForPhotoList = [
//   {
//     id: "1",
//     location: {
//       city: "Montreal",
//       country: "Canada",
//     },
//     urls: {
//       full: `${process.env.PUBLIC_URL}/Image-1-Full.jpeg`,
//       regular: `${process.env.PUBLIC_URL}/Image-1-Regular.jpeg`,
//     },
//     user: {
//       id: "1",
//       username: "exampleuser",
//       name: "Joe Example",
//       profile: `${process.env.PUBLIC_URL}/profile-1.jpg`,
//     },
//   },
//   {
//     id: "2",
//     location: {
//       city: "Toronto",
//       country: "Canada",
//     },
//     urls: {
//       full: `${process.env.PUBLIC_URL}/Image-2-Full.jpeg`,
//       regular: `${process.env.PUBLIC_URL}/Image-2-Regular.jpeg`,
//     },
//     user: {
//       id: "2",
//       username: "exampleuser",
//       name: "Joe Example",
//       profile: `${process.env.PUBLIC_URL}/profile-1.jpg`,
//     },
//   },
//   {
//     id: "3",
//     location: {
//       city: "Ottawa",
//       country: "Canada",
//     },
//     urls: {
//       full: `${process.env.PUBLIC_URL}/Image-3-Full.jpeg`,
//       regular: `${process.env.PUBLIC_URL}/Image-3-Regular.jpeg`,
//     },
//     user: {
//       id: "3",
//       username: "exampleuser",
//       name: "Joe Example",
//       profile: `${process.env.PUBLIC_URL}/profile-1.jpg`,
//     },
//   },
// ];


const PhotoList = (props) => {
  const { photos, favPhotoAdd, favPhotoDelete, selectPhoto, displayPhoto } = props;

  const parsedPhotos =
    Array.isArray(photos) &&
    photos.map((photo) => (
      <PhotoListItem
      photoList={photos}
      key={photo.id}
      {...photo}
      photoId={photo.id}
      thisPhoto={photo}
      location={photo.location}
      imageSource={photo.urls.regular}
      username={photo.user.username}
      profile={photo.user.profile}
      favPhotoAdd={favPhotoAdd} 
      favPhotoDelete={favPhotoDelete}
      selectPhoto={selectPhoto}
      displayPhoto={displayPhoto}
    />
    ));

  return (<ul className="PhotoList photo-list">{parsedPhotos}</ul>);
}

export default PhotoList;
