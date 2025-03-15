import TeamRepository from "../repo/TeamsRepository.js";

export class TeamService {
    static async fetchAllTeams() {
        return await TeamRepository.fetchAllTeams();
    }
}
