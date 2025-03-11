import ChallengeRepository from "../repo/ChallengeRepository.js";
import TeamRepository from "../repo/TeamsRepository.js";
import { CustomError } from "../utils/exceptions/CustomError.js";
import { HttpStatusCode } from "../utils/exceptions/HttpStatusCode.js";

class ChallengeService {
    static async fetchAllChallengesInCompetition({ competitionId }) {
        const challenges = await ChallengeRepository.fetchChallenges({
            competitionId,
        });

        return challenges;
    }
    static async fetchAllAssignedChallenges(teamId) {
        // based on team id fetch challenges inlcude challenge submissions
        let challenges = await ChallengeRepository.fetchChallengeDetailsByTeamId(teamId);

        challenges = challenges.map((challenge) => {
            return {
                challengeId: challenge.challengeId,
                name: challenge.name,
                description: challenge.description,
                teamScore:
                    challenge.challengeSubmissions.filter(
                        (submission) => submission.teamId === teamId
                    )[0]?.score ?? 0,
                status: challenge.status,
                deadline: challenge.deadline,
            };
        });

        return challenges;
    }
    static async startChallengeRound({
        name,
        description,
        competitionId,
        teamIds,
        deadline
    }) {
        // check if teams exist
        const existingTeams = await TeamRepository.findManyTeams(teamIds);

        if (existingTeams.length !== teamIds.length) {
            throw new CustomError(
                "One or more teams do not exist.",
                HttpStatusCode.NOT_FOUND
            );
        }

        const challenge = await ChallengeRepository.createChallenge({
            name,
            description,
            competitionId,
            teamIds,
            deadline
        });
        return challenge;
    }
    static async submitProject({
        title,
        description,
        projectURL,
        challengeId,
        teamId,
    }) {
        // check if team exists
        const team = await TeamRepository.fetchTeamById(teamId);
        if (!team) {
            throw new CustomError("Team Not Found.", HttpStatusCode.NOT_FOUND);
        }

        // check if challenge exists
        const challenge = await ChallengeRepository.fetchChallengeById({
            challengeId,
            includeTeams: true,
        });
        if (!challenge) {
            throw new CustomError(
                "Challenge Not Found.",
                HttpStatusCode.NOT_FOUND
            );
        }

        // Check if the team is part of the challenge
        const isTeamInChallenge = challenge.teams.some(
            (team) => team.teamId === teamId
        );
        if (!isTeamInChallenge) {
            throw new CustomError(
                "Team is not part of this challenge.",
                HttpStatusCode.FORBIDDEN
            );
        }

        const existingSubmission =
            await ChallengeRepository.fetchTeamChallangeSubmission({
                challengeId,
                teamId,
            });

        if (existingSubmission) {
            throw new CustomError(
                "Project has already been submitted.",
                HttpStatusCode.CONFLICT
            );
        }

        const projectSubmission =
            await ChallengeRepository.createChallengeSubmission({
                title,
                description,
                projectURL,
                challengeId,
                teamId,
            });
        return projectSubmission;
    }
}
export default ChallengeService;
