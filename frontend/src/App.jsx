import React, { useState } from 'react';

import './App.scss';
import HomeRoute from 'routes/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
// HOOKS
import useApplicationData from 'hooks/useApplicationData';
// DATA
import mockPhotos from 'data/photos';
import mockTopics from 'data/topics';


// Note: Rendering a single component to build components in isolation
const App = () => {
  
  const {
    state,
    onPhotoSelect,
    updateToFavPhotoIds,
    onModal
  } = useApplicationData();

  return (
    <div className="App">
      {/* { Array.from(Array(3)).map((_, index) => <PhotoListItem photo={sampleDataForPhotoListItem} key={index} like={like} switchLike={switchLike}/>) } */}
      {/* <TopNavigation topics={sampleDataForTopicList}/>
      <PhotoList photos={sampleDataForPhotoList} like={like} switchLike={switchLike}/> */}
      <HomeRoute useApplicationData={useApplicationData}/>
      <PhotoDetailsModal useApplicationData={useApplicationData}/>
    </div>
  );
};

export default App;
