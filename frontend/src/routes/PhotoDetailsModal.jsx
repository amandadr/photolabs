import React from 'react';

import '../styles/PhotoDetailsModal.scss'
import PhotoList from 'components/PhotoList';
import closeSymbol from '../assets/closeSymbol.svg';
import PhotoFavButton from 'components/PhotoFavButton';

const PhotoDetailsModal = (props) => {
  const { useApplicationData } = props;
  const handleClose = () => setShow(false);

  const photo = useApplicationData.onPhotoSelect.viewPhoto[0];

  return show &&
    <div className="photo-details-modal">
      <button onClick={handleClose} className="photo-details-modal__close-button">
        <img src={closeSymbol} alt="close symbol" />
      </button>

      <section className="photo-details-modal__header">
        <section className="photo-details-modal__image-container">
        <PhotoFavButton useApplicationData={useApplicationData} photoId={photo.id}/>
        <img src={photo.urls.full} className="photo-details-modal__image"></img>
        </section>
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
        <PhotoList className="photo-list" photos={useApplicationData.onPhotoSelect.viewPhoto[0].similarPhotos} />
      </section>
    </div>

};

export default PhotoDetailsModal;
