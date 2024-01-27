import React from "react";

const Tags = (props) => {
  const { list } = props;
  const renderTags = () => {
    let elements = list.map((item, index) => {
      return (
        <p className="tags" key={index}>
          {item}
        </p>
      );
    });
    return elements;
  };
  return <div className="services-tags">{renderTags()}</div>;
};

export default Tags;
