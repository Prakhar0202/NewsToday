import React from "react";
import hourglass from "./Hourglass.gif";

const Spinner = () => {
  return (
    <div className="text-center my-5">
      <img src={hourglass} alt="hourglass" />
    </div>
  );
};
export default Spinner;
