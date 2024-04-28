import {FC, useState, useEffect} from "react";

import MatchCard from "./match-card";

interface propType {}
const SeasonView: FC<propType> = () => {
	const [team, setTeam] = useState();
	return (
		<>
			<div className="bg-generic-100 w-full">
				<h2 className="font-bold text-2xl mb-4">Season View</h2>
			</div>
			<div className="matches w-full overflow-y-scroll flex gap-4 flex-col pr-1 md:pr-4 mb-[100px]">
				<MatchCard />
				<MatchCard />
				<MatchCard />
				<MatchCard />
				<MatchCard />
				<MatchCard />
			</div>
		</>
	);
};

export default SeasonView;
