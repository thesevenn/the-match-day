import {FC, useState, useEffect} from "react";
import {useParams} from "react-router-dom";

import {Fixture} from "../types/fixture.type";
import Tabs from "../components/ui/tabs";
import Tab from "../components/ui/tab";
import SeasonView from "../components/season-view";
import CalendarView from "../components/calendar-view";
import MatchDayView from "../components/matchday-view";
import {getSeasonOfTeam} from "../api/get-season";
import {currentSeason} from "../lib/current-season";

const tabs = ["season", "calendar", "matchday"];

interface propType {}
const TeamSeason: FC<propType> = () => {
	const [activeTab, setActiveTab] = useState<number>(0);
	const [fixtures, setFixtures] = useState<Array<Fixture>>([]);
	const {_league, _team} = useParams();

	useEffect(() => {
		async function getData() {
			console.log("inside cached");
			const cachedFixtures: string = localStorage.getItem("fixtures")!;
			const cachedTeam: string = localStorage.getItem("user-team")!;
			if (
				cachedFixtures &&
				JSON.parse(cachedTeam) == _team &&
				cachedFixtures.length > 2
			) {
				console.log(JSON.parse(cachedFixtures));
				setFixtures(JSON.parse(cachedFixtures));
			} else {
				const season = currentSeason();
				const data = await getSeasonOfTeam(
					_team || "",
					season.toString(),
					_league
				);
				const extractedData: Array<Fixture> = data.response.map(
					//@ts-expect-error complex api response shape
					(match, index: number) => {
						return {
							id: match.fixture.id,
							date: match.fixture.date,
							matchday: index + 1,
							venue: match.fixture.venue.name,
							status: {
								short: match.fixture.status.short,
								elapsed: match.fixture.status.elapsed,
							},
							teams: match.teams,
							goals: match.goals,
							league: {
								id: match.league.id,
								name: match.league.name,
								season: match.league.season,
							},
						};
					}
				);
				setFixtures(extractedData.reverse());
				localStorage.clear();
				localStorage.setItem("fixtures", JSON.stringify(extractedData));
				localStorage.setItem("user-team", JSON.stringify(_team));
				console.log(data);
			}
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
						<p className="text-sm font-medium">2023/24</p>
					</div>
				</div>
				<h2>TMD</h2>
			</header>
			<div className="px-4 w-full max-w-[540px] text-white font-normal relative flex-1 flex flex-col">
				<section className="team-season w-full">
					{/* <SeasonView fixtures={fixtures} /> */}
					{/* TODO - Calendar view  */}
					{/* <CalendarView fixtures={fixtures} selectedTeam={_team} /> */}
					{/* TODO - Matchday view */}
					<MatchDayView fixture={fixtures[0]} />
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
