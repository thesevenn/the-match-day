import {Link} from "react-router-dom";
export default function GetStarted() {
	return (
		<div className="get-started relative w-screen h-screen flex items-start justify-center bg-generic-100/90 px-4 py-8 md:p-16 before:content-[''] before:absolute before:bg-[url('/get_started_backdrop.png')] before:inset-0 before:-z-10 before:bg-no-repeat before:bg-center before:w-full before:h-full before:bg-cover ">
			<div className="w-full h-full flex flex-col items-center justify-between">
				<h1 className="font-semibold text-primary-500 text-4xl">
					The Match Day
				</h1>
				<div className="flex flex-col items-center gap-12">
					<div className="supported-leagues w-full flex flex-col justify-center items-center gap-6">
						<div className="flex w-full justify-center gap-8">
							<img
								src="/pl.svg"
								alt=""
								className="w-15 h-15 aspect-square object-contain"
							/>
							<img
								src="/laliga.svg"
								alt=""
								className="w-15 h-15 aspect-square object-contain"
							/>
							<img
								src="/bundesliga.svg"
								alt=""
								className="w-15 h-15 aspect-square object-contain"
							/>
							<img
								src="/seriea.svg"
								alt=""
								className="w-15 h-15 aspect-square object-contain"
							/>
						</div>
						<div className="flex w-full gap-8 justify-center">
							<img
								src="/ligue.svg"
								alt=""
								className="w-15 h-15 aspect-square object-contain"
							/>
							<img
								src="/erdivisie.svg"
								alt=""
								className="w-15 h-15 aspect-square object-contain"
							/>
							<img
								src="/isl.svg"
								alt=""
								className="w-15 h-15 aspect-square object-contain"
							/>
						</div>
					</div>
					<div>
						<Link to="/app">
							<button>Get Started</button>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
}
