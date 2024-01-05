import React, { useState, useEffect } from "react";
import axios from "axios";

import "./App.scss";
import HomeRoute from "routes/HomeRoute";
import PhotoDetailsModal from "routes/PhotoDetailsModal";
import useModal from "hooks/useModal";
import usePhoto from "hooks/usePhoto";
import useFavList from "hooks/useFavList";

const App = () => {
  const { isShowing, toggleModal } = useModal();

  const { statePhoto, setStatePhoto } = usePhoto();

  const { favList, setFavList } = useFavList();

  // setFavList(JSON.parse(localStorage.getItem("favList")));

  useEffect(() => {
    setFavList(JSON.parse(localStorage.getItem("favList")));
  }
  , []);

  // REFACTOR!!!!!!!!!!!!!
  // definitely rename the photolist to something more identifiable and put that state in the reducer so it can be accessed by all components!
  const [thisPhotoList, setPhotoList] = useState([]);
  const [thisTopicList, setTopicList] = useState([]);

  useEffect(() => {
    const photoPromise = axios.get("http://localhost:8001/api/photos");
    const topicPromise = axios.get("http://localhost:8001/api/topics");

    const promises = [photoPromise, topicPromise];

    Promise.all(promises).then((arrayOfResponses) => {
      const photos = arrayOfResponses[0].data;
      const topics = arrayOfResponses[1].data;
      setPhotoList(photos);
      setTopicList(topics);
    });
  }, []);

  // REFACTOR!!!!!!!!!!!!!
  // refactor all the passed props here to exclude the state and functions that are now in the reducer!!
  return (
    <div className="App">
      <HomeRoute
        photos={thisPhotoList}
        topics={thisTopicList}
        setPhotoList={setPhotoList}
        toggleModal={toggleModal}
        setStatePhoto={setStatePhoto}
      />

      <PhotoDetailsModal
        isShowing={isShowing}
        hide={toggleModal}
        setStatePhoto={setStatePhoto}
        statePhoto={statePhoto}
      />
    </div>
  );
};

export default App;
