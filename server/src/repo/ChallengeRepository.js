import prisma from "../config/prismaConfig.js";

class ChallengeRepository {
    static async fetchChallenges({ competitionId }) {
        const challenges = await prisma.challenge.findMany({
            where: { competitionId },
        });
        return challenges;
    }

    static async fetchChallengeDetailsByTeamId(teamId) {
        const challenges = await prisma.challenge.findMany({
            where: { teams: { some: { teamId } } },
            include: { challengeSubmissions: true, challengeScore: true },
        });
        return challenges;
    }

    static async fetchChallengesScoreByTeamId(teamId) {
        const challenges = await prisma.challengeScore.findMany({
            where: { teams: { some: { teamId } } },
        });
        return challenges;
    }

    static async fetchChallengeById({ challengeId, includeTeams = false }) {
        const challenges = await prisma.challenge.findUnique({
            where: { challengeId },
            include: {
                teams: includeTeams,
            },
        });
        return challenges;
    }
    static async createChallenge({
        name,
        description,
        competitionId,
        teamIds,
        deadline,
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
                deadline,
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
    static async fetchTeamChallangeSubmission({ challengeId, teamId }) {
        const challengeSubmission = await prisma.challengeSubmission.findFirst({
            where: {
                challengeId,
                teamId,
            },
        });
        return challengeSubmission;
    }

    static async fetchAllSubmissions({ section, offset, size }) {
        const submissions = await prisma.challengeSubmission.findMany({
            where: { teamId: { contains: section } },
            skip: offset,
            take: size,
            orderBy: { submissionDate: "desc" },
            include: {
                challenge: {
                    select: {
                        name: true,
                        deadline: true,
                        competition: { select: { competitionName: true } },
                    },
                },
            },
        });
        return submissions;
    }
}

export default ChallengeRepository;
