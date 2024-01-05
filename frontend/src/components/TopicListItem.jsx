import React, { useCallback } from "react";

import "../styles/TopicListItem.scss";
import { setTopic } from "helpers/helpers";

const TopicListItem = (props) => {
  const { topicId, title, setPhotoList } = props;

  const url = `http://localhost:8001/api/topics/photos/${topicId}`;

  return (
    <div
      className="topic-list__item"
      onClick={useCallback(() => {
        setTopic(url, setPhotoList);
      }, [])}
    >
      {title}
    </div>
  );
};

export default TopicListItem;
