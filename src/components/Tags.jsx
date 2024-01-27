import React from "react";

const Tags = (props) => {
  const { list } = props;
  const renderTags = () => {
    let elements = list.map((item) => {
      return <p className="tags">{item}</p>;
    });
    return elements;
  };
  return <div className="services-tags">{renderTags()}</div>;
};

export default Tags;
