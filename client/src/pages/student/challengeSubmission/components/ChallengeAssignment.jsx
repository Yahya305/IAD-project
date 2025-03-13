import React from "react";
import "./index.css";

const ChallengeSubmission = () => {
    return(
        <div className="container">
            <div className="box">
                <section className="submission">
                    <h2 className="submission_week">
                        Week 05
                    </h2>
                    <p className="submission_description">
                        Submit your project before the deadline and track your progress
                    </p>
                </section>
                <section className="problem">
                    <div className="problem_statement">
                        <h3 className="problem_heading">
                            Create an innovative solution for the given problem statement
                        </h3>
                        <p className="problem_description">
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt consequatur non officiis, necessitatibus itaque, deserunt recusandae repudiandae distinctio nostrum
                        </p>
                    </div>
                    <div className="deadline_groups_info">
                    <p className="date_groups">
                        <span className="label">
                            Deadline: 
                        </span> 2/15/2025 at 11:59:59 PM
                    </p>
                    <p className="date_groups">
                        <span className="label">
                            Participating Groups: 
                        </span> A1 & A4 Vs B1 & B7 
                    </p>
                    </div>
                </section>
                
                <section className="project_submission">
                    <div className="content">
                        <div className="instruction">
                           <h3 className="instruction_about_project">
                                Submit your project
                           </h3> 
                        </div>
                        <p className="description_about_url">
                            Paste your project URL below to submit your work
                        </p>
                        </div>
                    <form className="submission_form">
                        <div className="url">
                            <input 
                            type="url" 
                            className="url-input" 
                            placeholder="https://your-project-url.com"
                            required/>
                        </div>
                        <div className="buttons">
                            <button className="submit-button" type="submit">
                                Submit
                            </button>
                            <button className="cancel-button" type="reset">
                                Cancel
                            </button>
                        </div>
                    </form>
                </section>
            </div>
        </div>
    );
};
export default ChallengeSubmission;