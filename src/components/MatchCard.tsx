import {FC} from "react";

interface propType {}
const MatchCard: FC<propType> = () => {
	return (
		<div className="grid grid-cols-3 w-full bg-generic-200 rounded-lg p-4 items-center justify-center hover:bg-generic-100 border-solid border-[1px] border-transparent/10 hover:border-white/10 cursor-pointer transition-colors">
			<div className="w-full flex flex-col items-center gap-1 justify-center">
				<img
					src="/pl.png"
					alt="home team club crest"
					className="w-[75px] h-[75px]"
				/>
				<p className="text-sm text-gray-200">Arsenal</p>
			</div>
			<div className="w-full flex flex-col items-center">
				<p className="text-sm text-gray-200 mb-2">Sep 04 2023</p>
				<p className="text-4xl text-gray-200 font-bold">2 : 1</p>
				<p className="text-sm text-gray-400">FT</p>
			</div>
			<div className="w-full flex flex-col items-center gap-1 justify-center">
				<img
					src="/pl.png"
					alt="home team club crest"
					className="w-[75px] h-[75px]"
				/>
				<p className="text-sm text-gray-200">Arsenal</p>
			</div>
		</div>
	);
};

export default MatchCard;
