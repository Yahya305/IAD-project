import React from "react";
import Box from "./Box";

function Boxes() {
  return (
    <div className="boxes">
      <Box num="45" schedule="Days" />
      <Box num="23" schedule="Hours" />
      <Box num="45" schedule="Mins" />
      <Box num="45" schedule="Sec" />
    </div>
  );
}

export default Boxes;
