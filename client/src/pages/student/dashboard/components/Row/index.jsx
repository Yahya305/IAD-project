import React, { useState } from "react";
import { IoMdAdd } from "react-icons/io";
import "./index.css";
import { AnimatePresence } from "framer-motion";
import UploadChallengeSubmission from "../UploadChallengeSubmission";

const index = ({ data }) => {
    const [Modals, _SET_MODALS] = useState({
        UploadChallengeSubmission: false,
    });
    const setModal = (name, value) => {
        _SET_MODALS((p) => ({ ...p, [name]: value }));
    };
    console.log(data);

    return (
        <>
            <div className="each-row">
                <div className="row-content">
                    <div className="row-wrapper">
                        <p className="fields tasks">{data.name}</p>
                        <p className="fields submission-link">
                            <a href="https://example.com/task-demo">
                                https://example.com/task-demo
                            </a>
                        </p>
                        <p className="fields deadline">
                            {new Date(data.deadline).toLocaleDateString()}
                        </p>
                        <p className="fields status">{data.status}</p>
                        <p className="fields score">{data.teamScore}</p>
                        <p className="fields expand">
                            <IoMdAdd
                                size={25}
                                cursor={"pointer"}
                                onClick={() =>
                                    setModal("UploadChallengeSubmission", true)
                                }
                            />
                        </p>
                    </div>
                </div>
            </div>
            <AnimatePresence>
                {Modals.UploadChallengeSubmission && (
                    <UploadChallengeSubmission
                        close={() =>
                            setModal("UploadChallengeSubmission", false)
                        }
                    />
                )}
            </AnimatePresence>
        </>
    );
};

export default index;
