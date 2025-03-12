export const getChallengeStatus = (challenge) => {
    let status;
    if (!challenge.projectURL && new Date(challenge.deadline) < new Date()) {
        status = "Missed Deadline";
    } else if (challenge.projectURL) {
        status = "Submitted";
    } else if (challenge.status === "IN_PROGRESS") {
        status = "In Progress";
    } else {
        status = challenge.status;
    }
    return status;
};
