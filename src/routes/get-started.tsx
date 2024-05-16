import {Link} from "react-router-dom";

import Button from "../components/ui/button";

export default function GetStarted() {
	return (
		<div
			className="get-started relative w-screen h-screen flex items-start justify-center bg-generic-100/90 px-4 py-8 md:p-16 isolate"
			style={{
				backgroundImage: "url('/get_started_backdrop.png')",
				backgroundRepeat: "no-repeat",
				backgroundSize: "cover",
				backgroundPosition: "center",
			}}
		>
			<div className="absolute w-full h-full bg-dark-100/90 blur-[60px] top-0 left-0 -z-10"></div>
			<div className="w-full h-full flex flex-col items-center justify-between">
				<h1 className="font-semibold text-primary-500 text-4xl">
					The Match Day
				</h1>
				<div className="flex flex-col items-center gap-12">
					<div className="supported-leagues w-full flex flex-col justify-center items-center gap-6">
						<div className="flex w-full justify-center gap-8">
							<img
								src="/pl.png"
								alt=""
								className="w-16 h-16 aspect-square object-contain"
							/>
							<img
								src="/laliga.svg"
								alt=""
								className="w-16 h-16 aspect-square object-contain"
							/>
							<img
								src="/bundesliga.svg"
								alt=""
								className="w-16 h-16 aspect-square object-contain"
							/>
							<img
								src="/seriea.svg"
								alt=""
								className="w-16 h-16 aspect-square object-contain"
							/>
						</div>
						<div className="flex w-full gap-8 justify-center">
							<img
								src="/ligue.svg"
								alt=""
								className="w-16 h-16 aspect-square object-contain"
							/>
							<img
								src="/eredivisie.svg"
								alt=""
								className="w-16 h-16 aspect-square object-contain"
							/>
							<img
								src="/isl.svg"
								alt=""
								className="w-16 h-16 aspect-square object-contain"
							/>
						</div>
					</div>
					<div>
						<Link to="/app/league">
							<Button>Get Started</Button>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
}
