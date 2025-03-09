import React from "react";

function NavButton(props, width = 20 , height = 20) {
    return (
        <button className={props.className || ""} type="button">
          {props.name}
          {props.image && <img src={props.image} width={width} height={height} alt="" />}
        </button>
    );
}

export default NavButton;