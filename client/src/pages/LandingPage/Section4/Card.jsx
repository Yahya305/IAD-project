import React from "react";
import Images from "../_lib/Images";
import CardText from "./CardText";

function Card(props) {
  return (
    <div className="card">
      <Images image={props.cardImg} />

      <CardText  title={props.title} para={props.para} />
    </div>
  );
}

export default Card;
