import {FC} from "react";

import MatchCard from "../components/MatchCard";

interface propType {}
const TeamSeason: FC<propType> = () => {
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
				<div className="tabs bg-dark-200/70 border-[1px] border-solid border-white/30 fixed bottom-4 flex justify-between items-center text-center left-1/2 w-[90%] max-w-[400px] px-4 py-3 rounded-full -translate-x-1/2 text-sm gap-2 backdrop-blur-md lowercase isolate text-generic-100">
					<p className="rounded-full w-full cursor-pointer font-medium">
						season view
					</p>
					<p className="rounded-full w-full cursor-pointer font-medium">
						calender view
					</p>
					<p className="rounded-full w-full cursor-pointer font-medium">
						matchday view
					</p>
					<div className="absolute bg-primary-500 w-36 h-full bottom-0 rounded-full -z-10 left-0"></div>
				</div>
			</div>
		</section>
	);
};
export default TeamSeason;
