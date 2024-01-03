import React, { useState, useEffect } from "react";
import axios from "axios";

import "./App.scss";
import HomeRoute from "routes/HomeRoute";
import PhotoDetailsModal from "routes/PhotoDetailsModal";
import useApplicationData from "hooks/useApplicationData";

const App = () => {

  // REFACTOR!!!!!!!!!!!!!
  // definitely rename the photolist to something more identifiable and put that state in the reducer so it can be accessed by all components!
  const [thisPhotoList, setPhotoList] = useState([]);
  const [thisTopicList, setTopicList] = useState([]);

  const [change, setChange] = useState(false);

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
        change={change}
        setChange={setChange}
      />

      <PhotoDetailsModal />
    </div>
  );
};

export default App;
