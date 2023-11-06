import React, { useCallback } from "react";

import "../styles/TopicListItem.scss";

// const sampleDataForTopicListItem = {
//   id: "1",
//   slug: "topic-1",
//   label: "Nature",
// };

const TopicListItem = (props) => {
  const { topicId, slug, title, setPhotoList } = props;

  const fetchPhotos = async () => {
    let res = await (
      await fetch(`http://localhost:8001/api/topics/photos/${topicId}`)
    ).json();
    setPhotoList(res);
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
