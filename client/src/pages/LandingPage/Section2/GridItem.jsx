import React from "react";
import MainSpan from "../_lib/MainSpan";
import Images from "../_lib/Images";

function GridItem(props) {
    return (
        <div className="grid-item">
            <Images image={props.image} />
            <MainSpan title={props.head} />
            <MainSpan title={props.subhead} />
        </div>
    );
}



export default GridItem;

