import {FC} from "react";

interface propType {
	children: React.ReactNode;
}
const MaxWidthWrapper: FC<propType> = ({children}) => {
	return (
		<div className="w-full max-w-[1440px] flex justify-center items-center">
			{children}
		</div>
	);
};

export default MaxWidthWrapper;
