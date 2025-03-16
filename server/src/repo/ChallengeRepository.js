import prisma from "../config/prismaConfig.js";
import { CustomError } from "../utils/exceptions/CustomError.js";
import { HttpStatusCode } from "../utils/exceptions/HttpStatusCode.js";

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

    static async fetchChallengeDetails({ challengeId }) {
        const challenge = await prisma.challenge.findUnique({
            where: { challengeId },
            include: {
                teams: {
                    include: {
                        students: {
                            select: {
                                name: true,
                                seatNo: true,
                                studentId: true,
                            },
                        },
                    },
                },
                competition: true,
                challengeSubmissions: true,
            },
        });
        return challenge;
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

    static async submitGrades({ challengeId, grades }) {
        try {
            // Flatten all member grades from all teams into a single array
            const allGrades = grades.flatMap((team) =>
                team.members.map((member) => ({
                    challengeId,
                    studentId: member.studentId,
                    score: member.score,
                }))
            );

            const teamScores = grades.map((team) => {
                const totalScore = team.members.reduce(
                    (sum, member) => sum + member.score,
                    0
                );
                const memberCount = team.members.length;
                // Normalize score by dividing by number of members (scale to 100)
                // Round to 2 decimal places for cleaner numbers
                const normalizedScore =
                    Math.round((totalScore / memberCount) * 10 * 100) / 100;

                return {
                    teamId: team.teamId,
                    score: normalizedScore,
                };
            });

            // First, check which teams don't have submissions
            const existingSubmissions =
                await prisma.challengeSubmission.findMany({
                    where: {
                        challengeId,
                        teamId: { in: teamScores.map((ts) => ts.teamId) },
                    },
                    select: { teamId: true },
                });

            const existingTeamIds = new Set(
                existingSubmissions.map((sub) => sub.teamId)
            );

            // Separate teams into those that need creation vs update
            const teamsNeedingSubmission = teamScores.filter(
                (ts) => !existingTeamIds.has(ts.teamId)
            );
            const teamsWithSubmission = teamScores.filter((ts) =>
                existingTeamIds.has(ts.teamId)
            );

            // Use transaction to ensure all operations complete successfully
            const [challenge] = await prisma.$transaction([
                // Update challenge status
                prisma.challenge.update({
                    where: { challengeId },
                    data: { status: "COMPLETED" },
                }),
                // Create individual student scores
                prisma.challengeScore.createMany({
                    data: allGrades,
                }),
                // Create submissions for teams that don't have one
                ...(teamsNeedingSubmission.length > 0
                    ? [
                          prisma.challengeSubmission.createMany({
                              data: teamsNeedingSubmission.map((team) => ({
                                  challengeId,
                                  teamId: team.teamId,
                                  score: team.score,
                                  title: `${team.teamId} Submission`,
                                  description:
                                      "Auto-generated submission on grading",
                                  projectURL: "Not Available",
                                  submissionDate: new Date(),
                              })),
                          }),
                      ]
                    : []),
                // Update scores for existing submissions
                ...(teamsWithSubmission.length > 0
                    ? [
                          prisma.challengeSubmission.updateMany({
                              where: {
                                  challengeId,
                                  teamId: {
                                      in: teamsWithSubmission.map(
                                          (ts) => ts.teamId
                                      ),
                                  },
                              },
                              data: {
                                  score: teamScores[0].score, // This will be updated in the loop below
                              },
                          }),
                      ]
                    : []),
            ]);

            // Update scores individually for existing submissions
            if (teamsWithSubmission.length > 0) {
                await Promise.all(
                    teamsWithSubmission.map((team) =>
                        prisma.challengeSubmission.updateMany({
                            where: {
                                challengeId,
                                teamId: team.teamId,
                            },
                            data: {
                                score: team.score,
                            },
                        })
                    )
                );
            }

            return challenge;
        } catch (error) {
            console.error("Error in submitGrades:", error);
            throw new CustomError(
                "Failed to submit grades: " + error.message,
                HttpStatusCode.INTERNAL_SERVER_ERROR
            );
        }
    }
}

export default ChallengeRepository;
