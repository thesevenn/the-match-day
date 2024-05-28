import {FC, Suspense, useState, useEffect} from "react";
import {useParams, Link} from "react-router-dom";

import {Check} from "lucide-react";

import {Team} from "../types/team.type";
import {League} from "../types/league.type";
import {buttonVariants} from "../types/button-variants.type";
import Button from "./ui/button";
import {getTeamsOfLeague} from "../api/get-teams";
import MaxWidthWrapper from "./ui/max-width-wrapper";
import {LEAGUES} from "../data/leagues";
import {currentSeason} from "../lib/current-season";

interface propType {}
const SelectTeam: FC<propType> = () => {
	const [teams, setTeams] = useState<Array<Team>>([]);
	const [currentLeauge, setCurrentLeague] = useState<League | undefined>();
	const [selected, setSelected] = useState<Team>({} as Team);
	const {_league} = useParams();
	useEffect(() => {
		async function getData() {
			const cachedTeams: string = localStorage.getItem("teams-cache")!;
			const cachedLeague: string = localStorage.getItem("user-leagueId")!;
			if (
				cachedTeams &&
				cachedLeague &&
				JSON.parse(cachedLeague) == _league &&
				cachedTeams.length > 2
			) {
				setTeams(JSON.parse(cachedTeams));
			} else {
				const year: number = currentSeason();
				const data = await getTeamsOfLeague(parseInt(_league || ""), year);
				//@ts-expect-error complex data shape from api
				const extractedData: Array<Team> = data.response.map(item => {
					return {
						id: item.team.id,
						name: item.team.name,
						logo: item.team.logo,
						code: item.team.code,
						country: item.team.country,
					};
				});
				setTeams(
					extractedData.sort((teamA, teamB) =>
						teamA.name < teamB.name ? -1 : 1
					)
				);
				localStorage.clear();
				localStorage.setItem("teams-cache", JSON.stringify(extractedData));
				localStorage.setItem("user-leagueId", JSON.stringify(_league));
			}
		}
		getData();
	}, [_league]);
	useEffect(() => {
		setCurrentLeague(
			LEAGUES.find(league => league.id == parseInt(_league || ""))
		);
	}, [_league]);

	return (
		<section
			className={`select-league w-full min-h-screen h-auto md:h-screen flex justify-center ${currentLeauge?.background}`}
		>
			<div className="w-full flex flex-col items-center justify-between py-8">
				<div className="w-full flex flex-col items-center gap-4">
					<div className="selected-league flex flex-col items-center gap-2">
						<img
							src={currentLeauge?.src}
							alt=""
							className="league-logo w-16 h-16 md:w-20 md:h-20"
						/>
						<h1 className="text-white text-lg md:text-xl font-semibold capitalize">
							Select your team
						</h1>
					</div>
					<MaxWidthWrapper>
						<Suspense>
							<div className="m-4 w-full md:w-[600px] max-w-[380px] md:max-w-[600px] grid grid-cols-3 md:grid-cols-5 rounded-md h-[50vh] min-h-[360px] md:min-h-[560px] md:h-auto overflow-y-scroll bg-generic-100/75">
								{teams.map(team => (
									<div
										key={team.id}
										className={`${
											selected.id == team.id
												? "border-green-400"
												: "border-ghost-200"
										} border-[1px] border-solid flex flex-col items-center justify-center py-2 
											gap-2
										 hover:border-green-400 transition-all group cursor-pointer relative lg:overflow-hidden`}
										onClick={() => setSelected(team)}
									>
										<img
											src={team.logo}
											key={team.id}
											className={`transition-all w-[75px] h-[75px] ${
												team.id == selected.id
													? "scale-[0.85] -translate-y-2 group-hover:scale-[0.95]"
													: "group-hover:scale-95"
											}`}
										/>
										<p
											className={`transition-all text-sm text-white font-normal text-center ${
												team.id == selected.id
													? "scale-[0.85] -translate-y-5"
													: ""
											}`}
										>
											{team.name}
										</p>
										{selected.id == team.id && (
											<i className="absolute bottom-2 text-green-400">
												<Check />
											</i>
										)}
									</div>
								))}
							</div>
						</Suspense>
					</MaxWidthWrapper>
				</div>
				<div className="flex flex-col items-center gap-2">
					{selected.id && (
						<p className="text-white text-sm font-light">
							selected {selected.name}
						</p>
					)}
					<Link
						to={selected.id ? `/app/${_league}/${selected.id}/current` : ""}
					>
						<Button
							variant={
								selected.id ? buttonVariants.secondary : buttonVariants.ghost
							}
						>
							Confirm Selection
						</Button>
					</Link>
				</div>
			</div>
		</section>
	);
};

export default SelectTeam;
