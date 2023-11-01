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
  const { photo, key } = props;

  return (
    <section key={key} className="PhotoListItem photo-list__item">
      <PhotoFavButton/>
      <img className="photo-list__image" src={`${photo.imageSource}`}/>
      <section className="photo-list__user-details">
      <img className="photo-list__user-profile" src={`${photo.profile}`}/>
      <div className="photo-list__user-info">
      <div>{photo.username}</div>
      <div className="photo-list__user-location">{photo.location.city}, {photo.location.country}</div>
      </div>
      </section>
    </section>
  );
};

export default PhotoListItem;
