import React, { useState, useEffect } from 'react';
import axios from 'axios';

import './App.scss';
import HomeRoute from 'routes/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';


// Note: Rendering a single component to build components in isolation
const App = () => {
  const [thisPhotoList, setPhotoList] = useState([]);
  const [thisTopicList, setTopicList] = useState([]);

  useEffect(() => {
    const photoPromise = axios.get("http://localhost:8001/api/photos");
    const topicPromise = axios.get("http://localhost:8001/api/topics")

    const promises = [photoPromise, topicPromise];

    Promise.all(promises)
    .then((arrayOfResponses) => {
      console.log(arrayOfResponses);
      const photos = arrayOfResponses[0].data;
      const topics = arrayOfResponses[1].data;
      setPhotoList(photos);
      setTopicList(topics);
    })
  }, [])

  const [favList, setFavList] = useState({});
  const [viewPhoto, setPhoto] = useState({});
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);

  return (
    <div className="App">
      {/* { Array.from(Array(3)).map((_, index) => <PhotoListItem photo={sampleDataForPhotoListItem} key={index} like={like} switchLike={switchLike}/>) } */}
      {/* <TopNavigation topics={sampleDataForTopicList}/>
      <PhotoList photos={sampleDataForPhotoList} like={like} switchLike={switchLike}/> */}
      <HomeRoute photos={thisPhotoList} topics={thisTopicList} favList={favList} setFavList={setFavList} handleShow={handleShow} setPhoto={setPhoto} setPhotoList={setPhotoList}/>
      <PhotoDetailsModal favList={favList} setFavList={setFavList} show={show} setShow={setShow} handleShow={handleShow} viewPhoto={viewPhoto} photoList={thisPhotoList}/>
    </div>
  );
};

export default App;
