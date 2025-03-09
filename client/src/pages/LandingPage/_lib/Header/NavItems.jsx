import React from "react";

function NavItems(props) {
  return (
    <div>
      {props.name}
      {props.image && <img src={props.image} alt="Arrow" width={10} />}
    </div>
  );
}

export default NavItems;
