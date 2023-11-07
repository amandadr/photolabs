import React, { useState, useEffect } from 'react';
import axios from 'axios';

import './App.scss';
import HomeRoute from 'routes/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
import useApplicationData from 'hooks/useApplicationData';

const App = () => {
  const {
    state,
    favPhotoAdd,
    favPhotoDelete,
    selectPhoto,
    displayPhoto
  } = useApplicationData();


  // const favourites = state.favList.includes(action.id) 
  // ? state.favList.filter((item) => item !== action.id) 
  // : [...state.favList, action.id];

  const [thisPhotoList, setPhotoList] = useState([]);
  const [thisTopicList, setTopicList] = useState([]);

  useEffect(() => {
    const photoPromise = axios.get("http://localhost:8001/api/photos");
    const topicPromise = axios.get("http://localhost:8001/api/topics")

    const promises = [photoPromise, topicPromise];

    Promise.all(promises)
      .then((arrayOfResponses) => {
        const photos = arrayOfResponses[0].data;
        const topics = arrayOfResponses[1].data;
        setPhotoList(photos);
        setTopicList(topics);
      })
  }, [])

  return (
    <div className="App">
      {/* { Array.from(Array(3)).map((_, index) => <PhotoListItem photo={sampleDataForPhotoListItem} key={index} like={like} switchLike={switchLike}/>) } */}
      {/* <TopNavigation topics={sampleDataForTopicList}/>
      <PhotoList photos={sampleDataForPhotoList} like={like} switchLike={switchLike}/> */}
      <HomeRoute photos={thisPhotoList} topics={thisTopicList} favList={state.favList} favPhotoAdd={favPhotoAdd} favPhotoDelete={favPhotoDelete} selectPhoto={selectPhoto} displayPhoto={displayPhoto} />

      <PhotoDetailsModal photo={state.photo} favPhotoAdd={favPhotoAdd} favPhotoDelete={favPhotoDelete} displayPhoto={displayPhoto} show={state.show} />
    </div>
  );
};

export default App;
