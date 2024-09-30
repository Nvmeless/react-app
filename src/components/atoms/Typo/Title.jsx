import React from "react";

const Title = ({ children, ...props }) => {
  return (
    <div
      style={{
        // backgroundColor: "red",
        fontSize: "3rem",
      }}
    >
      {children}
    </div>
  );
};

export default Title;
