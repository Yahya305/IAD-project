import prisma from "../config/prismaConfig.js";

class ChallengeRepository {
    static async fetchChallenges({ competitionId }) {
        const challenges = await prisma.challenge.findMany({
            where: { competitionId },
        });
        return challenges;
    }
    static async fetchChallengeById({challengeId,includeTeams=false}) {
        const challenges = await prisma.challenge.findUnique({
            where: { challengeId },
            include:{
                teams:includeTeams
            }
        });
        return challenges;
    }
    static async createChallenge({
        name,
        description,
        competitionId,
        teamIds,
    }) {
        // Create the challenge
        const challenge = await prisma.challenge.create({
            data: {
                name,
                description,
                competitionId,
                teams: {
                    connect: teamIds.map((teamId) => ({ teamId })),
                },
            },
        });
        return challenge;
    }
    static async createChallengeSubmission({
        title,
        description,
        projectURL,
        challengeId,
        teamId,
    }) {
        const challengeSubmission = await prisma.challengeSubmission.create({
            data: {
                title,
                description,
                projectURL,
                challengeId,
                teamId,
            },
        });
        return challengeSubmission;
    }
}

export default ChallengeRepository;
