import React from "react";

const Title = (props) => {
  return (
    <div
      style={{
        // backgroundColor: "red",
        fontSize: "3rem",
      }}
    >
      {props.children}
    </div>
  );
};

export default Title;
