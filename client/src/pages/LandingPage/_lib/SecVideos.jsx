import React from "react";

function SecVideos(props) {
    return (
        <div className="secImg">
          <video
            src={props.video}
            width="100%"
            autoPlay
            loop
            muted
          />
        </div>
    );
}

export default SecVideos;