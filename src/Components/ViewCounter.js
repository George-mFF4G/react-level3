import React from "react";

const ViewCounter = ({ counter, counterHandler }) => {
  console.log("viewCounter");
  return (
    <div className={"box"}>
      <p>{counter}</p>
      <button onClick={counterHandler}>Increase</button>
    </div>
  );
};

export default ViewCounter;
