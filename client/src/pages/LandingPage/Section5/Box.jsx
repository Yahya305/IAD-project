import React from "react";
import MainSpan from "../_lib/MainSpan";

function Box(props) {
  return (
    <div className="box">
        <MainSpan title={props.num} />
        <MainSpan title={props.schedule} />
    </div>
  );
}

export default Box;
