import React from "react";
import "./UploadButton.css";
import { IoMdAdd } from "react-icons/io";

function UploadButton() {
    return (
        <button className="upload-task-button">
            <IoMdAdd size={25} />
            Upload Task
        </button>
    );
}

export default UploadButton;
