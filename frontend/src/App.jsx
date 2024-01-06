import React, { useState, useMemo, createContext } from "react";

import "./App.scss";
import HomeRoute from "routes/HomeRoute";
import PhotoDetailsModal from "routes/PhotoDetailsModal";
import usePhotoList from "hooks/usePhotoList";
import useModal from "hooks/useModal";
import usePhoto from "hooks/usePhoto";
import useFavList from "hooks/useFavList";
import { fetchPhotos, fetchTopics } from "helpers/helpers";

export const favContext = createContext([]);

const App = () => {
  const { isShowing, toggleModal } = useModal();

  const { statePhoto, setStatePhoto } = usePhoto();

  const { favList, setFavList, favPhotoAdd, favPhotoDelete } = useFavList();

  const { photoList, setPhotoList } = usePhotoList();
  
  const [topicList, setTopicList] = useState([]);
  
  useMemo(() => {
    const storageList = JSON.parse(localStorage.getItem("favList"));
    storageList && setFavList(storageList);
  }, []);

  useMemo(() => {
    fetchPhotos().then((photos) => {
      setPhotoList(photos);
    });

    fetchTopics().then((topics) => {
      setTopicList(topics);
    });
  }, []);

  return (
    <div className="App">
      <favContext.Provider value={{ favList, favPhotoAdd, favPhotoDelete }}>
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
      </favContext.Provider>
    </div>
  );
};

export default App;
