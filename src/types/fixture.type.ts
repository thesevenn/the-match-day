import {Team} from "./team.type";

export interface Fixture {
	id: number;
	refree: string;
	date: string;
	matchday: number;
	venue: string;
	status: {
		short: string | null;
		elapsed: string | null;
	};
	teams: {
		home: Omit<Team, "code" | "country">;
		away: Omit<Team, "code" | "country">;
	};
	goals: {
		home: number;
		away: number;
	};
	league: {
		id: number;
		name: string;
		season: number;
	};
}
