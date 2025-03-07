import prisma from "../config/prismaConfig.js";

class TeamRepository {
    static async findManyTeams(teamIds) {
        const teams = await prisma.team.findMany({
            where: { teamId: { in: teamIds } },
        });
        return teams;
    }
}

export default TeamRepository;
