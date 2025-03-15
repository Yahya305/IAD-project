import { TeamService } from "../service/TeamsService.js";

export class TeamController {
    static async fetchAllTeams(req) {
        return await TeamService.fetchAllTeams();
    }
}
