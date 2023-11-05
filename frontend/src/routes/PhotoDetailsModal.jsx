import React from 'react';

import '../styles/PhotoDetailsModal.scss'
import PhotoList from 'components/PhotoList';
import closeSymbol from '../assets/closeSymbol.svg';

const PhotoDetailsModal = (props) => {
  const { show, setShow, viewPhoto } = props;
  const handleClose = () => setShow(false);

  const photo = viewPhoto[0];

  return show &&
    <div className="photo-details-modal">
      <button onClick={handleClose} className="photo-details-modal__close-button">
        <img src={closeSymbol} alt="close symbol" />
      </button>

      <section className="photo-details-modal__header">
        <img src={photo.urls.full} className="photo-details-modal__image"></img>
        <section className="photo-details-modal__photographer-details">
          <img src={photo.user.profile} className="photo-details-modal__photographer-profile"></img>
          <section className="photo-details-modal__photographer-info">
            <div>{photo.user.username}</div>
            <div className="photo-details-modal__photographer-location">{photo.location.city}, {photo.location.country}</div>
          </section>
        </section>
      </section>

      <section className="photo-list photo-details-modal__images">
        Similar Photos
        <PhotoList className="photo-list" photos={viewPhoto[0].similarPhotos} />
      </section>
    </div>

};

export default PhotoDetailsModal;
