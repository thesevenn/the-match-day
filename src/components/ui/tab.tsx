import {Dispatch, FC, SetStateAction} from "react";

interface propType {
	active: boolean;
	bg?: string;
	text?: string;
	index: number;
	setActiveTab: Dispatch<SetStateAction<number>>;
	children: React.ReactNode;
}
const Tab: FC<propType> = ({
	children,
	active,
	bg,
	text,
	setActiveTab,
	index,
}) => {
	return (
		<p
			className={`rounded-full cursor-pointer capitalize font-medium select-none transition-colors px-8 py-2 ${
				active ? text : "text-white"
			} ${active ? bg : "bg-transparent"}`}
			onClick={() => setActiveTab(index)}
		>
			{children}
		</p>
	);
};

export default Tab;
