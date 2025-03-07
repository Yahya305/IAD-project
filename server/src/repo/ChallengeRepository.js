import prisma from "../config/prismaConfig.js";

class ChallengeRepository {
    static async fetchChallenges({ competitionId }) {
        const challenges = await prisma.challenge.findMany({
            where: { competitionId },
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
}

export default ChallengeRepository;
