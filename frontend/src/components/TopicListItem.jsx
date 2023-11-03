import React from "react";

import "../styles/TopicListItem.scss";

// const sampleDataForTopicListItem = {
//   id: "1",
//   slug: "topic-1",
//   label: "Nature",
// };

const TopicListItem = (props) => {
  const { slug, title } = props;

  return (
    <div className="TopicListItem topic-list__item">
      {title}
    </div>
  );
};

export default TopicListItem;
