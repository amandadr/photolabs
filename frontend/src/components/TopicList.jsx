import React from "react";

import TopicListItem from "./TopicListItem";
import "../styles/TopicList.scss";

const TopicList = (props) => {
  const { topics, setPhotoList } = props;

  const parsedTopics =
    Array.isArray(topics) &&
    topics.map((topic) => (
      <TopicListItem key={topic.id} topicId={topic.id} {...topic} slug={topic.slug} title={topic.title} setPhotoList={setPhotoList}/>
    ));

  return (
    <div className="top-nav-bar__topic-list">
      {parsedTopics}
    </div>
  );
};

export default TopicList;
