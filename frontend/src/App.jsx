import React, { useState, useEffect } from "react";

import "./App.scss";
import HomeRoute from "routes/HomeRoute";
import PhotoDetailsModal from "routes/PhotoDetailsModal";
import usePhotoList from "hooks/usePhotoList";
import useModal from "hooks/useModal";
import usePhoto from "hooks/usePhoto";
import useFavList from "hooks/useFavList";
import { fetchPhotos, fetchTopics } from "helpers/helpers";

const App = () => {
  const { isShowing, toggleModal } = useModal();

  const { statePhoto, setStatePhoto } = usePhoto();

  const { favList, setFavList } = useFavList();

  const { photoList, setPhotoList } = usePhotoList();

  // setFavList(JSON.parse(localStorage.getItem("favList")));

  useEffect(() => {
    setFavList(JSON.parse(localStorage.getItem("favList")));
  }, []);

  const [topicList, setTopicList] = useState([]);

  useEffect(() => {
    fetchPhotos().then((photos) => {
      setPhotoList(photos);
    });

    fetchTopics().then((topics) => {
      setTopicList(topics);
    });
  }, []);

  return (
    <div className="App">
      <HomeRoute
        photos={photoList}
        topics={topicList}
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
