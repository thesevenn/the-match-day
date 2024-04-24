import {FC, Suspense, useState, useEffect} from "react";

import Button from "./ui/button";
import MaxWidthWrapper from "./ui/max-width-wrapper";
import {getTeamsOfLeague} from "../api/get-teams";

interface Team {
	id: number;
	code: string;
	name: string;
	logo: string;
	country: string;
}
interface propType {}
const SelectTeam: FC<propType> = () => {
	const [teams, setTeams] = useState<Array<Team>>([]);
	useEffect(() => {
		console.log("before requst");
		async function getData() {
			const data = await getTeamsOfLeague(140, 2023);
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
		}
		getData();
		console.log("after request");
	}, []);
	console.log(teams);

	// getData();
	return (
		<section className="select-league w-full h-screen flex justify-center bg-pl-500">
			<div className="w-full flex flex-col items-center gap-12">
				<div className="w-full flex flex-col items-center gap-6">
					<div className="selected-league">
						<img src="" alt="" className="league-logo" />
						<h1 className="text-white text-2xl font-semibold capitalize">
							Select your team
						</h1>
					</div>

					<Suspense fallback="<div>loading...</div>">
						<MaxWidthWrapper>
							<div className="px-4 w-full max-w-[720px] grid grid-cols-3 md:grid-cols-5 rounded max-h-[600px] overflow-y-scroll bg-generic-100/75">
								{teams.map(team => (
									<div className="border-ghost-200  border-[1px] border-solid flex justify-center">
										<img src={team.logo} key={team.id} className=" w-24 h-24" />
									</div>
								))}
							</div>
						</MaxWidthWrapper>
					</Suspense>
				</div>
				<div>
					<Button>Confirm Selection</Button>
				</div>
			</div>
		</section>
	);
};

export default SelectTeam;
