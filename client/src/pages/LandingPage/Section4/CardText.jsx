import React from "react";
import MainSpan from "../_lib/MainSpan";
import Paragraph from "../_lib/Paragraph";

function CardText(props) {
  return (
    <div className="text">
      <MainSpan title={props.title} />
      <Paragraph para={props.para} />
    </div>
  );
}

export default CardText;
