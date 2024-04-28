import {FC} from "react";
import Tab from "./tab";
Tab;

interface propType {
	children: React.ReactNode;
}
const Tabs: FC<propType> = ({children}) => {
	return (
		<div className="tabs bg-dark-200/70 border-[1px] border-solid border-white/30 fixed bottom-4 flex justify-between items-center text-center left-1/2 w-[90%] max-w-[400px]  rounded-full -translate-x-1/2 text-sm gap-2 backdrop-blur-md lowercase isolate text-generic-100">
			{children}
		</div>
	);
};

export default Tabs;
