import React from "react";
import Text from "./Text";
const ViewText = ({ text, addAge }) => {
  const apiConnect = () => {
    for (let i = 0; i <= 500_000_000; i++) {}
    console.log("api called");
  };
  console.log("viewText");
  apiConnect();
  return (
    <div>
      <button onClick={addAge}>ADD AGE</button>
      <p>The included Text:</p>
      <Text>{text.name}</Text>
      <Text>{text.age}</Text>
    </div>
  );
};

export default React.memo(ViewText);
