import {Team} from "./team";

export interface Fixture {
	id: number;
	date: Date;
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
