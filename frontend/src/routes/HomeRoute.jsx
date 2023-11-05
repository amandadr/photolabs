import React, { useState } from 'react';

import '../styles/HomeRoute.scss';
import TopNavigation from 'components/TopNavigationBar';
import PhotoList from 'components/PhotoList';

// DATA
import photos from 'data/photos';
import topics from 'data/topics';


const HomeRoute = (props) => {
  const { show, setShow, handleShow, viewPhoto, setPhoto } = props;
  const [favList, setFavList] = useState({});

  return (
    <div className="home-route">
      <TopNavigation topics={topics} favList={favList} setFavList={setFavList} />
      <PhotoList 
      photos={photos}
      favList={favList}
      setFavList={setFavList}
      show={show}
      setShow={setShow}
      handleShow={handleShow}
      viewPhoto={viewPhoto}
      setPhoto={setPhoto}/>
    </div>
  );
};

export default HomeRoute;
