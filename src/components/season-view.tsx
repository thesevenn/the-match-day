import {Dispatch, FC, SetStateAction} from "react";

import MatchCard from "./match-card";
import {Fixture} from "../types/fixture.type";

interface propType {
	fixtures: Array<Fixture>;
	setSelectedMatch: Dispatch<SetStateAction<number>>;
	setActiveTab: Dispatch<SetStateAction<number>>;
}
const SeasonView: FC<propType> = ({
	fixtures,
	setSelectedMatch,
	setActiveTab,
}) => {
	return (
		<>
			{/* <div className="bg-generic-100 w-full">
				<h2 className="font-bold text-2xl mb-4">Season View</h2>
			</div> */}
			<div className="matches w-full  flex gap-4 flex-col pr-1 md:pr-4 mb-[100px]">
				{fixtures.map(fixture => (
					<a
						href="#"
						onClick={() => {
							setSelectedMatch(fixture.id);
							setActiveTab(2);
						}}
						key={fixture.id}
					>
						<span className="text-sm text-white/60">
							Matchday {fixture.matchday}
						</span>
						<MatchCard key={fixture.id} fixture={fixture} />
					</a>
				))}
			</div>
		</>
	);
};

export default SeasonView;
