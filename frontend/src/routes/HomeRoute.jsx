import React, { useState } from 'react';

import '../styles/HomeRoute.scss';
import TopNavigation from 'components/TopNavigationBar';
import PhotoList from 'components/PhotoList';

// DATA
import photos from 'data/photos';
import topics from 'data/topics';


const HomeRoute = () => {
  const [like, setLike] = useState(false);
  const switchLike = () => setLike(like === true ? false : true);

  return (
    <div className="home-route">
      <TopNavigation topics={topics}/>
      <PhotoList photos={photos} like={like} switchLike={switchLike}/>
    </div>
  );
};

export default HomeRoute;
