import {FC} from "react";

const LoadingMatchCard: FC = () => {
	return (
		<div className="grid grid-cols-3 w-full bg-white/20 rounded-lg p-4 items-center justify-center hover:bg-generic-100 border-solid border-[1px] border-transparent/10 hover:border-white/10 cursor-pointer transition-colors animate-pulse">
			<div className="w-20 aspect-square"></div>
			<div className="w-20 h-10"></div>
			<div className="w-20 aspect-square"></div>
		</div>
	);
};

export default LoadingMatchCard;
