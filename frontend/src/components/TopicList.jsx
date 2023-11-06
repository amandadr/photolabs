import React from "react";

import TopicListItem from "./TopicListItem";
import "../styles/TopicList.scss";

// const sampleDataForTopicList = [
//   {
//     id: "1",
//     slug: "topic-1",
//     title: "Nature",
//   },
//   {
//     id: "2",
//     slug: "topic-2",
//     title: "Travel",
//   },
//   {
//     id: "3",
//     slug: "topic-3",
//     title: "People",
//   },
// ];

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
