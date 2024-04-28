import {FC, useState} from "react";

import MatchCard from "../components/match-card";
import Tabs from "../components/ui/tabs";
import Tab from "../components/ui/tab";

const tabs = ["season", "calendar", "matchday"];
interface propType {}
const TeamSeason: FC<propType> = () => {
	const [activeTab, setActiveTab] = useState<number>(0);
	return (
		<section className="team-season w-full bg-generic-100 flex flex-col gap-8 items-center">
			<header className="header-league-info flex justify-between items-center bg-primary-500 p-4 lg:px-48 w-full sticky top-0 z-10">
				<div className="flex w-full gap-2 items-center">
					<img
						src="/pl.png"
						alt="user selected league"
						className="invert max-w-12 object-contain"
					/>
					<div className="flex flex-col">
						<p
							className="text-base font-semibold leading-4"
							aria-readonly
							aria-roledescription="Selected League"
						>
							Premier League
						</p>
						<p className="text-sm font-medium">season 2023-24</p>
					</div>
				</div>
				<h2>TMD</h2>
			</header>
			<div className="px-4 w-full max-w-[540px] text-white font-normal relative flex-1 flex flex-col">
				<section className="team-season w-full">
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
				</section>
				<Tabs>
					{tabs.map((tab, index) => (
						<Tab
							key={tab}
							index={index}
							active={activeTab == index}
							bg="bg-primary-500"
							setActiveTab={setActiveTab}
						>
							{tab}
						</Tab>
					))}
				</Tabs>
			</div>
		</section>
	);
};
export default TeamSeason;
