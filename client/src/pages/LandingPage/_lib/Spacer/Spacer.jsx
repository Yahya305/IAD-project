import React from "react";
import { useIsMobile } from "../../../../utils/useIsMobile";

function Spacer({ height }) {
    const isMobile = useIsMobile(576);

    return (
        <div
            style={{
                height: isMobile ? `calc(${height} * 0.6)` : height,
                width: "100%",
                maxWidth: "100%",
                overflow: "hidden",
                boxSizing: "border-box"
            }}
        ></div>
    );
}

export default Spacer;
