import React, {useState} from "react"

const useApplicationData = (initial) => {
  const [value, setValue] = useState(initial);

  return {
    value,
    onChange: (event) => setValue(event.target.value)
  };
}

export default useApplicationData;