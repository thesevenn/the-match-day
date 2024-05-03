import {FC} from "react";

import {Fixture} from "../types/match";
import {formattedDate} from "../lib/formatted-date";
import {extractTime} from "../lib/extract-time";

interface propType {
	fixture: Fixture;
}
const MatchCard: FC<propType> = ({fixture}) => {
	// TODO - add link to open each fixuter matchday
	return (
		<div className="grid grid-cols-3 w-full bg-generic-200 rounded-lg p-4 items-center justify-center hover:bg-generic-100 border-solid border-[1px] border-transparent/10 hover:border-white/10 cursor-pointer transition-colors">
			<div className="w-full flex flex-col items-center gap-1 justify-center">
				<img
					src={fixture.teams.home.logo}
					alt={fixture.teams.home.name}
					className="w-[64px] aspect-sqaure object-contain sm:w-[75px]"
				/>
				<p className="text-[12px] sm:text-sm text-gray-200 text-center">
					{fixture.teams.home.name}
				</p>
			</div>
			<div className="w-full flex flex-col items-center">
				<p className="text-[12px] sm:text-sm text-gray-200 mb-2 text-center">
					{formattedDate(fixture.date)}
				</p>
				<p className="text-2xl sm:text-4xl text-gray-200 font-bold">
					{fixture.status.short == "HT" || fixture.status.short == "FT"
						? fixture.goals.home + " : " + fixture.goals.away
						: extractTime(fixture.date)}
				</p>
				<p className="text-sm text-gray-400 text-center">
					{(fixture.status.short == "FT" || fixture.status.short == "HT") &&
						fixture.status.short}
				</p>
			</div>
			<div className="w-full flex flex-col items-center gap-1 justify-center">
				<img
					src={fixture.teams.away.logo}
					alt={fixture.teams.away.name}
					className="w-[64px] aspect-sqaure object-contain sm:w-[75px]"
				/>
				<p className="text-[12px] sm:text-sm text-gray-200 text-center">
					{fixture.teams.away.name}
				</p>
			</div>
		</div>
	);
};

export default MatchCard;
