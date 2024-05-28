import {FC, useState, useEffect} from "react";

import {ChevronRight, MapPin, Timer} from "lucide-react";

import {Fixture} from "../types/fixture.type";
import LoadingSpinner from "./loader/loading-spinner";
import MatchCard from "./match-card";
import {getPredictions} from "../api/get-predictions";
import {LEAGUES} from "../data/leagues";
import {extractTime} from "../lib/extract-time";
import {formattedDate} from "../lib/formatted-date";
import NoMatch from "./loader/no-match";

interface FixtureDetails {
	predictions: {
		home: string;
		draw: string;
		away: string;
	};
	teams: {
		home: {
			id: number;
			name: string;
			form: string;
		};
		away: {
			id: number;
			name: string;
			form: string;
		};
	};
}

interface propType {
	fixture: Fixture | null;
	team: string;
}
const MatchDayView: FC<propType> = ({fixture}) => {
	const [fixtureDetails, setFixtureDetails] = useState<FixtureDetails>(
		{} as FixtureDetails
	);
	console.log(fixture);
	useEffect(() => {
		async function getData() {
			if (!fixture) return;
			else {
				const data = (await getPredictions(fixture.id)).response[0];
				console.log(data);
				const extractedData: FixtureDetails = {
					predictions: {
						home: data.predictions.percent.home,
						draw: data.predictions.percent.draw,
						away: data.predictions.percent.away,
					},
					teams: {
						home: {
							id: data.teams.home.id,
							name: data.teams.home.name,
							form: data.teams.home.league.form,
						},
						away: {
							id: data.teams.away.id,
							name: data.teams.away.name,
							form: data.teams.away.league.form,
						},
					},
				};
				setFixtureDetails(extractedData);
				extractLastFiveGameForm(extractedData.teams.home.form);
			}
		}
		getData();
	}, [fixture]);

	if (fixture == null) return <NoMatch />;
	if (!fixture) return <LoadingSpinner />;

	function extractLastFiveGameForm(form: string) {
		if (!form) return [];
		return form.slice(form.length - 5).split("");
	}
	return (
		<section className="mb-12">
			{/* <div>
				<h2 className="font-bold text-lg sm:text-2xl mb-4">
					Match Day Overview
				</h2>
			</div> */}
			<div>
				<p className="text-sm font-medium text-white/60 mb-1">
					matchday {fixture.matchday}
				</p>
				<MatchCard fixture={fixture} />
				{fixtureDetails &&
					fixtureDetails.teams &&
					fixtureDetails.teams.away.form && (
						<div className="mt-8">
							<h2 className="flex items-center text-lg font-semibold pl-2">
								form guide
								<span className="text-sm text-white/70 ml-1 font-normal">
									{"("}last 5 league games{")"}
								</span>{" "}
								<ChevronRight className="w-5 text-white" />
							</h2>
							<div className="line-break w-full h-[2px] bg-slate-400/20 mt-1" />

							<div className="p-8 flex flex-col gap-4">
								<div className="flex justify-between font-medium flex-row items-center">
									<img
										className="w-14"
										src={fixture.teams.home.logo}
										alt={fixture.teams.home.name}
									/>
									<div className="flex justify-between items-center w-2/3">
										{fixtureDetails.teams &&
											extractLastFiveGameForm(
												fixtureDetails.teams.home.form
											).map((item, index) => (
												<span
													key={index}
													className={`${
														item == "w" || item == "W"
															? "bg-green-400"
															: item == "l" || item == "L"
															? "bg-red-400"
															: "bg-yellow-400"
													} rounded-full p-2 h-8 w-8 text-center flex items-center justify-center text-black`}
												>
													{item}
												</span>
											))}
									</div>
								</div>

								<div className="flex gap-8 font-medium flex-row itens-center justify-between">
									<img
										className="w-14"
										src={fixture.teams.away.logo}
										alt={fixture.teams.away.name}
									/>
									<div className="flex justify-between w-2/3 items-center">
										{fixtureDetails.teams &&
											extractLastFiveGameForm(
												fixtureDetails.teams.away.form
											).map((item, index) => (
												<span
													key={index}
													className={`${
														item == "w" || item == "W"
															? "bg-green-400"
															: item == "l" || item == "L"
															? "bg-red-400"
															: "bg-yellow-400"
													} rounded-full p-2 h-8 w-8 text-center flex items-center justify-center text-black`}
												>
													{item}
												</span>
											))}
									</div>
								</div>
							</div>
						</div>
					)}
				<div className="standing mt-8"></div>
				<div className="game-details mt-8 bg-dark-100 p-6 rounded-md">
					<h2 className="flex items-center text-lg font-semibold">
						Game Information
						<ChevronRight className="w-5 text-white" />
					</h2>
					<div className="line-break w-full h-[2px] bg-slate-400/20 mt-1" />
					<div className="p-4 flex flex-col gap-4">
						<div className="flex gap-2 items-center">
							<img
								className="w-6 h-auto aspect-square object-cover"
								src={
									LEAGUES.filter(item => fixture.league.id == item.id)[0].src
								}
								alt={
									LEAGUES.filter(item => fixture.league.id == item.id)[0].alt
								}
							/>
							<div className="flex flex-col">
								<p className="text-sm text-white/70">competition</p>
								<span className="text-sm">{fixture.league.name}</span>
							</div>
						</div>
						<div className="flex gap-2 items-center">
							<MapPin className="" />
							<div className="flex flex-col">
								<p className="text-sm text-white/70">Stadium</p>
								<span className="text-sm">{fixture.venue}</span>
							</div>
						</div>
						<div className="flex gap-1 items-center">
							<Timer />
							<div className="flex flex-col">
								<p className="text-sm text-white/70">kick-off</p>
								<span className="text-sm">
									{formattedDate(fixture.date)}{" "}
									<span className="lowercase">at</span>{" "}
									{extractTime(fixture.date)}
								</span>
							</div>
						</div>
						<div>
							{fixture && fixture.refree && (
								<div>
									<p className="text-sm text-white/70">refree</p>
									<span>{fixture.refree}</span>
								</div>
							)}
						</div>
					</div>
				</div>
				{fixtureDetails && fixtureDetails.predictions ? (
					<div className="predictions mb-16 mt-6">
						<h2 className="flex items-center text-lg font-semibold pl-2">
							Predictions <ChevronRight className="w-5 text-white" />
						</h2>
						<div className="line-break w-full h-[2px] bg-slate-400/20 mt-1" />
						<div className="w-full flex mx-2 overflow-hidden rounded-full mt-2">
							<div
								style={{width: fixtureDetails.predictions.home}}
								className="h-5 bg-blue-500 text-dark-100 text-center text-sm"
							>
								{/* <span className="mr-1">{fixtureDetails.teams.home.name}</span> */}
								{fixtureDetails.predictions.home}
							</div>
							<div
								style={{width: fixtureDetails.predictions.draw}}
								className="h-5 bg-white text-dark-100 text-center text-sm"
							>
								<span className=" mr-1">draw</span>
								{fixtureDetails.predictions.draw}
							</div>
							<div
								style={{width: fixtureDetails.predictions.away}}
								className="h-5 bg-red-500 text-dark-100 text-center text-sm"
							>
								{/* <span className=" mr-1">{fixtureDetails.teams.away.name}</span> */}
								{fixtureDetails.predictions.away}
							</div>
						</div>
					</div>
				) : (
					<LoadingSpinner />
				)}
			</div>
		</section>
	);
};

export default MatchDayView;
