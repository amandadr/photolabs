import React from "react";

import "../styles/PhotoDetailsModal.scss";
import PhotoList from "components/PhotoList";
import closeSymbol from "../assets/closeSymbol.svg";
import PhotoFavButton from "components/PhotoFavButton";

const PhotoDetailsModal = (props) => {
  const { isShowing, hide, setStatePhoto, statePhoto } = props;

  const photo = statePhoto;

  const toggleModal = () => {
    return null;
  }

  return (
    isShowing &&
    photo && (
      <div className="photo-details-modal">
        <button onClick={hide} className="photo-details-modal__close-button">
          <img src={closeSymbol} alt="close symbol" />
        </button>

        <section className="photo-details-modal__header">
          <section className="photo-details-modal__image-container">
            <PhotoFavButton photo={photo} />
            <img
              src={photo.urls.full}
              alt="imagination"
              className="photo-details-modal__image"
            />
          </section>
          <section className="photo-details-modal__photographer-details">
            <img
              src={photo.user.profile}
              alt="user"
              className="photo-details-modal__photographer-profile"
            />
            <section className="photo-details-modal__photographer-info">
              <div>{photo.user.username}</div>
              <div className="photo-details-modal__photographer-location">
                {photo.location.city}, {photo.location.country}
              </div>
            </section>
          </section>
        </section>

        <section className="photo-details-modal__images">
          <div className="photo-details-modal__similar-photos">
            Similar Photos
          </div>
          <PhotoList
            className="photo-list"
            photos={photo.similar_photos}
            toggleModal={toggleModal}
            setStatePhoto={setStatePhoto}
          />
        </section>
      </div>
    )
  );
};

export default PhotoDetailsModal;
