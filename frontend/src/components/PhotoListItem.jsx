import React, { useEffect } from "react";
import PhotoFavButton from "./PhotoFavButton";
import "../styles/PhotoListItem.scss";

const PhotoListItem = (props) => {

  const { photo, toggleModal, setStatePhoto } = props;

  const { id, location, urls, user } = photo;

  const handleDisplay = () => {
    setStatePhoto(photo);
    toggleModal();
  };

  return (
    <li key={id} className="photo-list__item">
      <PhotoFavButton photo={photo}/>
      <section
        className="photo-list__click-container"
        onClick={() => {
          handleDisplay();
        }}
      >
        <img
          className="photo-list__image"
          src={urls.regular}
          alt="imagination"
        />
        <div className="photo-list__user-details">
          <img
            className="photo-list__user-profile"
            src={user.profile}
            alt="user"
          />
          <div className="photo-list__user-info">
            <div>{user.name}</div>
            <div className="photo-list__user-location">
              {location.city}, {location.country}
            </div>
          </div>
        </div>
      </section>
    </li>
  );
};

export default PhotoListItem;
