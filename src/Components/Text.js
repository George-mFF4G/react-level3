import React from "react";

const Text = ({ children }) => {
  let text = children;
  console.log("Text");

  return (
    <div>
      <p>{text}</p>
    </div>
  );
};

export default Text;
