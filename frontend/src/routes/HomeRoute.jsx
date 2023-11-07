import React, { useState } from 'react';

import '../styles/HomeRoute.scss';
import TopNavigation from 'components/TopNavigationBar';
import PhotoList from 'components/PhotoList';


const HomeRoute = (props) => {
  const { photos, topics, favList, favPhotoAdd, favPhotoDelete, selectPhoto, displayPhoto } = props;

  return (
    <div className="home-route">
      <TopNavigation topics={topics} favList={favList}/>
      <PhotoList 
      photos={photos} topics={topics} favList={favList} favPhotoAdd={favPhotoAdd} favPhotoDelete={favPhotoDelete} selectPhoto={selectPhoto} displayPhoto={displayPhoto}/>
    </div>
  );
};

export default HomeRoute;
