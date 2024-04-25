import {FC, Suspense, useState, useEffect} from "react";
import {useParams} from "react-router-dom";

import {Check} from "lucide-react";

import Button from "./ui/button";
import {getTeamsOfLeague} from "../api/get-teams";
import {Team} from "../types/team";
import {League} from "../types/league";
import MaxWidthWrapper from "./ui/max-width-wrapper";
import {leagues} from "../data/leagues";

interface propType {}
const SelectTeam: FC<propType> = () => {
	const [teams, setTeams] = useState<Array<Team>>([]);
	const [currentLeauge, setCurrentLeague] = useState<League | undefined>();
	const [selected, setSelected] = useState<Team>({} as Team);
	const {_leagueId} = useParams();
	useEffect(() => {
		async function getData() {
			const cachedTeams: string = localStorage.getItem("teams-cache")!;
			if (cachedTeams) {
				console.log("in cache");
				setTeams(JSON.parse(cachedTeams));
			} else {
				const date: Date = new Date();
				const month: number = date.getMonth();
				const year: number =
					month > 5 ? date.getFullYear() : date.getFullYear() - 1;
				const data = await getTeamsOfLeague(parseInt(_leagueId || ""), year);
				console.log("inside api");
				setTeams(
					data.response.map(item => {
						item = item as Team;
						return {
							id: item.team.id,
							name: item.team.name,
							logo: item.team.logo,
							code: item.team.code,
							country: item.team.country,
						};
					})
				);
				localStorage.setItem("teams-cache", JSON.stringify(teams));
			}
		}
		getData();
	}, [_leagueId]);
	useEffect(() => {
		console.log("reloads");
		setCurrentLeague(
			leagues.find(league => league.id == parseInt(_leagueId || ""))
		);
	}, [_leagueId]);

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
						<Suspense fallback="<div>loading...</div>">
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
										 hover:border-green-400 transition-all group cursor-pointer relative`}
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
					<Button>Confirm Selection</Button>
				</div>
			</div>
		</section>
	);
};

export default SelectTeam;
