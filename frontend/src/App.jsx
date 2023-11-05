import React, { useState } from 'react';

import './App.scss';
import HomeRoute from 'routes/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
import mockPhotos from 'data/photos';


// Note: Rendering a single component to build components in isolation
const App = () => {
  
  const [ viewPhoto, setPhoto ] = useState(mockPhotos[0]);
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);

  return (
    <div className="App">
      {/* { Array.from(Array(3)).map((_, index) => <PhotoListItem photo={sampleDataForPhotoListItem} key={index} like={like} switchLike={switchLike}/>) } */}
      {/* <TopNavigation topics={sampleDataForTopicList}/>
      <PhotoList photos={sampleDataForPhotoList} like={like} switchLike={switchLike}/> */}
      <HomeRoute show={show} setShow={setShow} handleShow={handleShow} viewPhoto={viewPhoto} setPhoto={setPhoto}/>
      <PhotoDetailsModal show={show} setShow={setShow} handleShow={handleShow} viewPhoto={viewPhoto}/>
    </div>
  );
};

export default App;
