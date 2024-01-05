import { useState } from "react";

const usePhoto = () => {
  const [statePhoto, setStatePhoto] = useState({
    id: 0,
    user: 0,
    urls: 0,
    location: 0,
  });

  return {
    statePhoto,
    setStatePhoto,
  };
};

export default usePhoto;
