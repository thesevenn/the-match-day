import {FC} from "react";

const NoMatch: FC = () => {
	return (
		<div className="w-full bg-generic-200 rounded-lg p-4 items-center justify-center hover:bg-generic-100 border-solid border-[1px] border-transparent/10 hover:border-white/10 transition-colors text-sm font-light flex h-[50vh]">
			<p className="max-w-prose">
				select a match from season view to see match overview
			</p>
		</div>
	);
};

export default NoMatch;
