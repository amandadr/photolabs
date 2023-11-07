import React from 'react';

import './App.scss';
import HomeRoute from 'routes/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';

import useApplicationData from 'hooks/useApplicationData';
// DATA
import mockPhotos from 'data/photos';
import mockTopics from 'data/topics';

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
  return (
    <div className="App">
      {/* { Array.from(Array(3)).map((_, index) => <PhotoListItem photo={sampleDataForPhotoListItem} key={index} like={like} switchLike={switchLike}/>) } */}
      {/* <TopNavigation topics={sampleDataForTopicList}/>
      <PhotoList photos={sampleDataForPhotoList} like={like} switchLike={switchLike}/> */}
      
      <HomeRoute photos={mockPhotos} topics={mockTopics} favList={state.favList} favPhotoAdd={favPhotoAdd} favPhotoDelete={favPhotoDelete} selectPhoto={selectPhoto} displayPhoto={displayPhoto}/>

      <PhotoDetailsModal photo={state.photo} favPhotoAdd={favPhotoAdd} favPhotoDelete={favPhotoDelete} displayPhoto={displayPhoto} show={state.show}/>
    </div>
  );
};

export default App;
