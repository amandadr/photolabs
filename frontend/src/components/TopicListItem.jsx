import React, { useCallback } from "react";

import "../styles/TopicListItem.scss";
import { fetchPhotos } from "helpers/photoHelpers";

// const sampleDataForTopicListItem = {
//   id: "1",
//   slug: "topic-1",
//   label: "Nature",
// };

const TopicListItem = (props) => {
  const { topicId, slug, title, setPhotoList } = props;

  const url = `http://localhost:8001/api/topics/photos/${topicId}`;
  
  return (
    <div className="topic-list__item" onClick={useCallback(() => {
    fetchPhotos(url, setPhotoList);
  }, [])}>
      {title}
    </div>
  );
};

export default TopicListItem;
