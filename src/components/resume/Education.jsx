import React from "react";

const Education = ({ data }) => {
  const { title, subTitle, timeSpan } = data;

  return (
    <>
      <li>
        <h4>{title}</h4>
        <h5>{subTitle}</h5>
        <span>{timeSpan}</span>
      </li>
    </>
  );
};

export default Education;
