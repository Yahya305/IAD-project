import React from "react";
import BackDrop from "../../../../../global-components/Backdrop";
import "./index.css";

const UploadChallengeSubmission = (props) => {
    const { close } = props;
    return (
        <BackDrop onClick={close}>
            <div className="UploadChallengeSubmission">
                <div className="head">
                    <div className="title">Update Challege Submission</div>
                    <button onClick={close}>X</button>
                </div>
            </div>
        </BackDrop>
    );
};

export default UploadChallengeSubmission;
