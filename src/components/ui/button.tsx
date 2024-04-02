import {FC} from "react";

import {buttonVariants} from "../../types/button-variants";
interface propType {
	children: React.ReactNode;
	variant?: buttonVariants;
}
const Button: FC<propType> = ({children}) => {
	return (
		<button className="max-w-60 bg-primary-500 rounded-full px-12 py-2 text-generic-100 font-medium text-base hover:saturate-0 transition-all">
			{children}
		</button>
	);
};

export default Button;
