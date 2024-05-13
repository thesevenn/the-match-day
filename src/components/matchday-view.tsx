import {FC} from "react";

import {ChevronRight, MapPin, Timer} from "lucide-react";

import {Fixture} from "../types/fixture.type";
import LoadingSpinner from "./loader/loading-spinner";
import MatchCard from "./match-card";

interface propType {
	fixture: Fixture;
}
const MatchDayView: FC<propType> = ({fixture}) => {
	if (!fixture) return <LoadingSpinner />;
	return (
		<section className="min-h-screen mb-12">
			<div>
				<h2 className="font-bold text-lg sm:text-2xl mb-4">
					Match Day Overview
				</h2>
			</div>
			<div>
				<p className="text-sm font-medium text-white/60 mb-1">
					matchday {fixture.matchday}
				</p>
				<MatchCard fixture={fixture} />
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
								<span className="bg-green-400 rounded-full p-2 h-8 w-8 text-center flex items-center justify-center text-black">
									w
								</span>
								<span className="bg-green-400 rounded-full p-2 h-8 w-8 text-center flex items-center justify-center text-black">
									w
								</span>
								<span className="bg-green-400 rounded-full p-2 h-8 w-8 text-center flex items-center justify-center text-black">
									w
								</span>
								<span className="bg-red-400 rounded-full p-2 h-8 w-8 text-center flex items-center justify-center text-black">
									l
								</span>
								<span className="bg-green-400 rounded-full p-2 h-8 w-8 text-center flex items-center justify-center text-black">
									w
								</span>
							</div>
						</div>
						<div className="flex gap-8 font-medium flex-row itens-center justify-between">
							<img
								className="w-14"
								src={fixture.teams.away.logo}
								alt={fixture.teams.away.name}
							/>
							<div className="flex justify-between w-2/3 items-center">
								<span className="bg-yellow-400 rounded-full p-2 h-8 w-8 text-center flex items-center justify-center text-black">
									d
								</span>
								<span className="bg-green-400 rounded-full p-2 h-8 w-8 text-center flex items-center justify-center text-black">
									w
								</span>
								<span className="bg-yellow-400 rounded-full p-2 h-8 w-8 text-center flex items-center justify-center text-black">
									d
								</span>
								<span className="bg-red-400 rounded-full p-2 h-8 w-8 text-center flex items-center justify-center text-black">
									l
								</span>
								<span className="bg-green-400 rounded-full p-2 h-8 w-8 text-center flex items-center justify-center text-black">
									w
								</span>
							</div>
						</div>
					</div>
				</div>
				<div className="standing mt-8"></div>
				<div className="game-details mt-8 bg-dark-100 p-6 rounded-md">
					<h2 className="flex items-center text-lg font-semibold">
						Game Information
					</h2>
					<div className="line-break w-full h-[2px] bg-slate-400/20 mt-1" />
					<div className="p-4 flex flex-col gap-4">
						<div className="gap-2">
							<div className="flex flex-col">
								<p className="text-sm text-white/70">competition</p>
								<span className="text-sm">La liga</span>
							</div>
						</div>
						<div className="flex gap-1 items-center">
							<MapPin className="" />
							<div className="flex flex-col">
								<p className="text-sm text-white/70">Stadium</p>
								<span className="text-sm">Estadion Bernabeu</span>
							</div>
						</div>
						<div className="flex gap-1 items-center">
							<Timer />
							<div className="flex flex-col">
								<p className="text-sm text-white/70">kick-off</p>
								<span className="text-sm">Feb 04</span>
							</div>
						</div>
						<div>
							<div>
								<p className="text-sm text-white/70">refree</p>
								<span>Frank sinatra jr.</span>
							</div>
						</div>
					</div>
				</div>
				<div className="predictions">
					<h2 className="flex items-center text-lg font-semibold pl-2">
						Predictions <ChevronRight className="w-5 text-white" />
					</h2>
					<div className="line-break w-full h-[2px] bg-slate-400/20 mt-1" />
					<div className="w-full flex mx-2 overflow-hidden rounded-full mt-2">
						<div className="w-3/6 h-5 bg-blue-500 text-dark-100 text-center text-sm">
							<span className="mr-1">arsenal</span>
							50%
						</div>
						<div className="w-2/6 h-5 bg-white text-dark-100 text-center text-sm">
							<span className=" mr-1">draw</span>
							33%
						</div>
						<div className="w-1/6 h-5 bg-red-500 text-dark-100 text-center text-sm">
							<span className=" mr-1">everton</span>
							17%
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default MatchDayView;
