import {FC} from "react";

import {LoaderCircle} from "lucide-react";

const LoadingSpinner: FC = () => {
	return (
		<div
			role="loading-indicator"
			className="w-full h-28 flex items-center justify-center"
		>
			<LoaderCircle className="animate-spin" />
		</div>
	);
};

export default LoadingSpinner;
