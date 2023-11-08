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
      <HomeRoute photos={thisPhotoList} topics={thisTopicList} setPhotoList={setPhotoList} favList={state.favList} favPhotoAdd={favPhotoAdd} favPhotoDelete={favPhotoDelete} selectPhoto={selectPhoto} displayPhoto={displayPhoto}/>

      <PhotoDetailsModal photo={state.photo} favList={state.favList} favPhotoAdd={favPhotoAdd} favPhotoDelete={favPhotoDelete} selectPhoto={selectPhoto} displayPhoto={displayPhoto} show={state.show} />
    </div>
  );
};

export default App;
