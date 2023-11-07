import React from "react";

import PhotoFavButton from './PhotoFavButton';
import "../styles/PhotoListItem.scss";



// const sampleDataForPhotoListItem = {
//   id: "1",
//   location: {
//     city: "Montreal",
//     country: "Canada",
//   },
//   imageSource: `${process.env.PUBLIC_URL}/Image-1-Regular.jpeg`,
//   username: "Joe Example",
//   profile: `${process.env.PUBLIC_URL}/profile-1.jpg`,
// };

const PhotoListItem = (props) => {
  const { photoId, photo, location, imageSource, username, profile, favPhotoAdd, favPhotoDelete, selectPhoto, displayPhoto } = props;

  const handleDisplay = () => {
    selectPhoto(photo);
    displayPhoto(true);
  }

  return (
    <li key={photoId} className="photo-list__item">
      <PhotoFavButton photoId={photoId} favPhotoAdd={favPhotoAdd} favPhotoDelete={favPhotoDelete}/>
      <section className="photo-list__click-container" onClick={() => { handleDisplay();}}>
      <img className="photo-list__image" src={imageSource}/>
      <div className="photo-list__user-details">
      <img className="photo-list__user-profile" src={profile}/>
      <div className="photo-list__user-info">
      <div>{username}</div>
      <div className="photo-list__user-location">{location.city}, {location.country}</div>
      </div>
      </div>
      </section>
    </li>
  );
}

export default PhotoListItem;
