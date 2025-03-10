import React from "react";
import { useNavigate } from "react-router-dom";

function NavButton(props, width = 20, height = 20) {
    const navigate = useNavigate();

    const handleClick = () => {
        if (props.to) {
            navigate(props.to);
        }
    };

    return (
        <button 
            className={props.className || ""} 
            type="button"
            onClick={handleClick}
        >
          {props.name}
          {props.image && <img src={props.image} width={width} height={height} alt="" />}
        </button>
    );
}

export default NavButton;