import React, { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import BackDrop from "../../../../../global-components/Backdrop";
import "./index.css";
import useUserStore from "../../../../../store/userStore";
import toast from "../../../../../components/CustomToast/toast";
import { AxiosError } from "axios";
import apiClient from "@config/apiClient";

const UploadChallengeSubmission = (props) => {
    const { close, selectedChallenge, refetch } = props;
    const { user } = useUserStore();
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [projectURL, setProjectURL] = useState("");

    const { mutate: submitChallenge, status: mutationStatus } = useMutation({
        mutationKey: ["submit-challenge"],
        mutationFn: async (newSubmission) => {
            return apiClient.post(
                "/challenge/project-submission",
                newSubmission
            );
        },
        onSuccess(data) {
            if (data.status === 200) {
                toast.success({
                    title: "Success",
                    description: "Challenge submitted successfully",
                });
                refetch();
            }
        },
        onError(err) {
            if (err instanceof AxiosError) {
                toast.error({
                    title: "Error",
                    description: err.response?.data.message.code
                        ? err.response?.data.message.message
                        : err.response?.data.message,
                });
            } else {
                console.log(err);
                toast.error({
                    title: "Error",
                    description: "Internal Server Error.",
                });
            }
        },
    });

    console.log(selectedChallenge.challengeId, user);
    const onSubmit = (e) => {
        e.preventDefault();
        submitChallenge({
            title,
            description,
            projectURL,
            challengeId: selectedChallenge.challengeId,
        });
        close?.();
    };

    return (
        <BackDrop onClick={close}>
            <div className="UploadChallengeSubmission">
                <div className="head">
                    <div className="title">Update Challenge Submission</div>
                    <button onClick={close}>X</button>
                </div>
                <form className="body" onSubmit={onSubmit}>
                    <input
                        placeholder="Project Title"
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                    />
                    <textarea
                        placeholder="Description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        required
                    />
                    <input
                        placeholder="Project URL"
                        type="url"
                        value={projectURL}
                        onChange={(e) => setProjectURL(e.target.value)}
                        required
                    />
                    <button type="submit">Submit</button>
                </form>
            </div>
        </BackDrop>
    );
};

export default UploadChallengeSubmission;
