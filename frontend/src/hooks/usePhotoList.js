import { useState } from "react";

const usePhotoList = () => {
  const [photoList, setPhotoList] = useState([]);

  return {
    photoList,
    setPhotoList,
  };
};

export default usePhotoList;
