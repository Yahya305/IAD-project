import React from "react";
import kokImage from "../../../../assets/kok.jpeg";

function Logo() {
    return (
        <div className="logo">
            <img
                width={53}
                src={kokImage}
                alt="IAD logo"
                style={{ borderRadius: "50%" }}
            />
        </div>
    );
}

export default Logo;
