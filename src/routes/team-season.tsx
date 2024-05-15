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
import {LEAGUES} from "../data/leagues";
import {League} from "../types/league.type";

const tabs = ["season", "calendar", "matchday"];

interface propType {}
const TeamSeason: FC<propType> = () => {
	const [activeTab, setActiveTab] = useState<number>(0);
	const [fixtures, setFixtures] = useState<Array<Fixture>>([]);
	const [selectedMatch, setSelectedMatch] = useState<number>(0);
	const [currentLeague, setCurrentLeague] = useState<League>();
	const {_league, _team} = useParams();

	useEffect(() => {
		setCurrentLeague(
			LEAGUES.filter(leauge => _league && leauge.id == parseInt(_league))[0]
		);
	}, [_league]);
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
							refree: match.fixture.refree,
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
	const season: number = currentSeason();
	return (
		<section className="team-season w-full bg-generic-100 flex flex-col gap-8 items-center">
			<header className="header-league-info flex justify-between items-center bg-primary-500 p-4 lg:px-48 w-full sticky top-0 z-10">
				<div className="flex w-full gap-2 items-center">
					<img
						src={currentLeague?.src}
						alt={currentLeague?.alt}
						className="invert max-w-12 object-contain"
					/>
					<div className="flex flex-col">
						<p
							className="text-base font-semibold leading-4"
							aria-readonly
							aria-roledescription="Selected League"
						>
							{currentLeague?.name}
						</p>
						<p className="text-sm font-medium">
							{season}/{(season + 1) % 2000}
						</p>
					</div>
				</div>
				<h2>TMD</h2>
			</header>
			<div className="px-4 w-full max-w-[540px] text-white font-normal relative flex-1 flex flex-col">
				<section className="team-season w-full">
					{activeTab == 0 ? (
						<SeasonView
							setSelectedMatch={setSelectedMatch}
							setActiveTab={setActiveTab}
							fixtures={fixtures}
						/>
					) : activeTab == 1 ? (
						<CalendarView fixtures={fixtures} selectedTeam={_team} />
					) : (
						<MatchDayView
							team={_team || ""}
							fixture={
								fixtures.filter(fixture => fixture.id == selectedMatch)[0]
							}
						/>
					)}

					{/* TODO - Calendar view  */}

					{/* TODO - Matchday view */}
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
