import React, { useEffect } from "react";
import FavIcon from "./FavIcon";

import useApplicationData from "../hooks/useApplicationData";
import "../styles/FavBadge.scss";

const FavBadge = (change) => {
  const { state } = useApplicationData();

  const { favList } = state;
  

  // Display FavBadge when favList is not empty
  const triggerFavBadge = () => {
    return favList[0] ? true : false;
  };

  // WHY WONT THIS USEEFFECT WORK AAAGAHHHHHHH
  // Take detectChange out of the reducer altogether and just use it in the necessary components - this way the useEffect won't rerender on every change of the object properties in the reducer
  // try moving the change state from the reducer to App.jsx and pass it down as a prop to the FavBadge and PhotoFavButton components
  useEffect(() => {
    triggerFavBadge();
    console.log("favBadge useEffect", triggerFavBadge());
  }, [change]);

  return (
    console.log("favBadge rerendered", triggerFavBadge()),
    (
      <div className="fav-badge">
        <FavIcon displayAlert={() => triggerFavBadge()} selected={true} />
      </div>
    )
  );
};
// FORCE A RERENDER OF THE BADGE COMPONENT ONCLICK OF FAVBUTTON

export default FavBadge;
