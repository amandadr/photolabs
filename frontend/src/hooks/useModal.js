import { useState } from "react";

const useModal = () => {
  const [isShowing, setIsShowing] = useState(false);

  function toggleModal() {
    // setIsShowing(!isShowing);
    setTimeout(() => {
      setIsShowing(!isShowing);
    }, 100);
  }

  return {
    isShowing,
    toggleModal,
  };
};

export default useModal;
