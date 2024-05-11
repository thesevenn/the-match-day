import {FC} from "react";

import {Fixture} from "../types/fixture.type";
import MatchCard from "./match-card";

interface propType {
	fixture: Fixture;
}
const MatchDayView: FC<propType> = ({fixture}) => {
	return (
		<>
			<div>
				<h2 className="font-bold text-lg sm:text-2xl mb-4">
					Match Day Overview
				</h2>
			</div>
			<div>
				<p>matchday {fixture.matchday}</p>
				<MatchCard fixture={fixture} />
			</div>
		</>
	);
};

export default MatchDayView;
