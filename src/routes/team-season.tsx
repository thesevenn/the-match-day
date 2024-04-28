import {FC, useState, useEffect} from "react";
import {useParams} from "react-router-dom";

import MatchCard from "../components/match-card";
import Tabs from "../components/ui/tabs";
import Tab from "../components/ui/tab";
import SeasonView from "../components/season-view";
import {getSeasonOfTeam} from "../api/get-season";
import {currentSeason} from "../lib/current-season";

const tabs = ["season", "calendar", "matchday"];
const value = [
	{
		name: "season",
		render: SeasonView,
	},
];
interface propType {}
const TeamSeason: FC<propType> = () => {
	const [activeTab, setActiveTab] = useState<number>(0);
	const {_league, _team} = useParams();

	useEffect(() => {
		async function getData() {
			const season = currentSeason();
			const data = await getSeasonOfTeam(
				_team || "",
				season.toString(),
				_league
			);
			const extractedData = data.response;
			console.log(data);
		}
		getData();
	}, [_team, _league]);
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
					<SeasonView />
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
