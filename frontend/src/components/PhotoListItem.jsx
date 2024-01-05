import React from "react";
import useApplicationData from "../hooks/useApplicationData";
import PhotoFavButton from "./PhotoFavButton";
import "../styles/PhotoListItem.scss";

const PhotoListItem = (props) => {

  const { photo, isShowing, toggleModal } = props;

  const { id, location, urls, user } = photo;

  const { selectPhoto, displayPhoto } = useApplicationData();

  const handleDisplay = () => {
    selectPhoto(photo);
    // REFACTOR!!!!!
    // Change selectPhoto so that instead of setting the state with the photo object given (photo = photo.id, photo.location, etc) it searches the api to match the photo id to the photo object and then sets the state with that object. :) Probably create a helper function to do this - but maybe just edit selectPhoto in useApplicationData.js
    // displayPhoto(true);
    toggleModal();
  };


  return (
    <li key={id} className="photo-list__item">
      <PhotoFavButton photoId={id} />
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
