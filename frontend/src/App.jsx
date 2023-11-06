import React, { useState, useEffect } from 'react';

import './App.scss';
import HomeRoute from 'routes/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
// DATA
import mockPhotos from 'data/photos';
import mockTopics from 'data/topics';


// Note: Rendering a single component to build components in isolation
const App = () => {
  const [thisPhotoList, setPhotoList] = useState([]);
  const [thisTopicList, setTopicList] = useState([]);

  useEffect(() => {
    fetchPhotos();
    fetchTopics();
  }, [])

  const fetchPhotos = async () => {
    let res = await (
      await fetch("http://localhost:8001/api/photos")
      ).json();
      setPhotoList(res);
  }

  const fetchTopics = async () => {
    let res = await (
      await fetch("http://localhost:8001/api/topics")
      ).json();
      setTopicList(res);
  }

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
      <PhotoDetailsModal favList={favList} setFavList={setFavList} show={show} setShow={setShow} handleShow={handleShow} viewPhoto={viewPhoto} photoList={mockPhotos} />
    </div>
  );
};

export default App;
