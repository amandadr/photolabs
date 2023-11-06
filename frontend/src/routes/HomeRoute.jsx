import React, { useState } from 'react';

import '../styles/HomeRoute.scss';
import TopNavigation from 'components/TopNavigationBar';
import PhotoList from 'components/PhotoList';


const HomeRoute = (props) => {
  const { useApplicationData } = props;

  return (
    <div className="home-route">
      <TopNavigation useApplicationData={useApplicationData} />
      <PhotoList useApplicationData={useApplicationData}/>
    </div>
  );
};

export default HomeRoute;
