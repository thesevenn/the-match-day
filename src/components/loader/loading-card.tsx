import {FC} from "react";

import {LoaderCircle} from "lucide-react";

const LoadingCard: FC = () => {
	return (
		<div className="border-[1px] border-solid border-white/40 bg-ghost-200/40 min-w-full min-h-[80px] flex justify-center items-center">
			<LoaderCircle className="animate-spin text-white" />
		</div>
	);
};

export default LoadingCard;
