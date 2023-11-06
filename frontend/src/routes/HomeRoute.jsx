import React from 'react';

import '../styles/HomeRoute.scss';
import TopNavigation from 'components/TopNavigationBar';
import PhotoList from 'components/PhotoList';


const HomeRoute = (props) => {
  const { photos, topics, handleShow, setPhoto, favList, setFavList, setPhotoList } = props;

  return (
    <div className="home-route">
      <TopNavigation topics={topics} favList={favList} setPhotoList={setPhotoList}/>
      <PhotoList 
      photos={photos}
      favList={favList}
      setFavList={setFavList}
      handleShow={handleShow}
      setPhoto={setPhoto}/>
    </div>
  );
};

export default HomeRoute;
