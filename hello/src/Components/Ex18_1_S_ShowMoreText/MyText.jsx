import React, { useState } from "react";

const MyText = (props) => {
  const [readState, setReadState] = useState(false);
  const [content, setContent] = useState(props.text);
  const linkText = readState ? "Read More >>" : "Read Less <<";

  return (
    <div>
      {content}
      <input
        type="button"
        className="read-more-less"
        onClick={() => {
          setReadState(!readState);
          setContent(
            readState ? props.text : content.substring(0, props.maxLen)
          );
        }}
        value={linkText}
      ></input>
    </div>
  );
};

export default MyText;
