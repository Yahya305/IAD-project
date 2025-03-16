import React, { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import apiClient from "../../../../config/apiClient";
import toast from "../../../../components/CustomToast/toast";
import "./index.css";

const CreateCompetition = () => {
    const [state, setState] = useState({
        comp_name: "",
        section: "",
        end_date: "",
    });
    const changeValue = (name, value) => {
        setState((p) => ({ ...p, [name]: value }));
    };

    const {
        mutate: createCompetition,
        isPending,
        isSuccess,
    } = useMutation({
        mutationFn: async (competitionData) => {
            return await apiClient.post(
                "/competition/create-competition",
                competitionData
            );
        },
        onSuccess: () => {
            toast.success({
                title: "Competition Creation",
                description: "Competition created successfully",
            });
            setState({
                comp_name: "",
                section: "",
                end_date: "",
            });
        },
        onError: () => {
            toast.error({
                title: "Competition Creation",
                description: "Failed to create competition",
            });
        },
    });

    const Submit = () => {
        createCompetition({
            section: state.section,
            comp_name: state.comp_name,
            end_date: new Date(state.end_date).toISOString(),
        });
    };

    return (
        <div className="CreateCompetition">
            <div className="CreateCompetition-wrapper">
                <div className="head">
                    <div className="title">Create Competition</div>
                </div>
                <div className="body">
                    <div className="input">
                        <div className="title">Competition Name</div>
                        <input
                            type="text"
                            value={state.comp_name}
                            onChange={(e) =>
                                changeValue("comp_name", e.target.value)
                            }
                        />
                    </div>
                    <div className="input">
                        <div className="title">Choose Section</div>
                        <input
                            type="text"
                            value={state.section}
                            placeholder="Enter Section (A, B, C, etc.)"
                            onChange={(e) =>
                                changeValue("section", e.target.value)
                            }
                        />
                    </div>
                    <div className="input">
                        <div className="title">End Date</div>
                        <input
                            type="date"
                            value={state.end_date}
                            onChange={(e) =>
                                changeValue("end_date", e.target.value)
                            }
                        />
                    </div>
                </div>
                <button
                    className="submit"
                    disabled={isPending || isSuccess}
                    onClick={Submit}
                >
                    {isPending ? "Creating..." : "Submit"}
                </button>
            </div>
        </div>
    );
};

export default CreateCompetition;
