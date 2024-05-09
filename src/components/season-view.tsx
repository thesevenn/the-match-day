import {FC} from "react";

import MatchCard from "./match-card";
import {Fixture} from "../types/fixture.type";

interface propType {
	fixtures: Array<Fixture>;
}
const SeasonView: FC<propType> = ({fixtures}) => {
	return (
		<>
			<div className="bg-generic-100 w-full">
				<h2 className="font-bold text-2xl mb-4">Season View</h2>
			</div>
			<div className="matches w-full overflow-y-scroll flex gap-4 flex-col pr-1 md:pr-4 mb-[100px]">
				{fixtures.map(fixture => (
					<MatchCard key={fixture.id} fixture={fixture} />
				))}
			</div>
		</>
	);
};

export default SeasonView;
