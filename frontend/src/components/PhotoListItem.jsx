import { React } from "react";

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
  const { key, location, imageSource, username, profile } = props;


  return (
    <li key={key} className="PhotoListItem photo-list__item">
      <PhotoFavButton/>
      <img className="photo-list__image" src={imageSource}/>
      <div className="photo-list__user-details">
      <img className="photo-list__user-profile" src={profile}/>
      <div className="photo-list__user-info">
      <div>{username}</div>
      <div className="photo-list__user-location">{location.city}, {location.country}</div>
      </div>
      </div>
    </li>
  );
}

export default PhotoListItem;
