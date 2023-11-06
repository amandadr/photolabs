import React, { useCallback } from "react";
import axios from "axios";

import "../styles/TopicListItem.scss";

// const sampleDataForTopicListItem = {
//   id: "1",
//   slug: "topic-1",
//   label: "Nature",
// };

const TopicListItem = (props) => {
  const { topicId, slug, title, setPhotoList } = props;

  const fetchPhotos = async () => {
    axios.get(`http://localhost:8001/api/topics/photos/${topicId}`)
    .then((res) => {
      console.log(res.data);
      setPhotoList(res.data);
    })
  }
  
  return (
    <div className="topic-list__item" onClick={useCallback(() => {
    fetchPhotos();
  }, [])}>
      {title}
    </div>
  );
};

export default TopicListItem;
