import {FC, HTMLAttributes} from "react";

import {buttonVariants} from "../../types/button-variants";
interface propType extends HTMLAttributes<HTMLButtonElement> {
	children: React.ReactNode;
	variant?: buttonVariants;
}
const Button: FC<propType> = ({children}) => {
	return (
		<button
			type="button"
			aria-roledescription="selection confirmation button"
			className="min-w-60 bg-primary-500 rounded-full px-8 py-4 text-generic-100 font-medium text-base hover:saturate-0 transition-all"
		>
			{children}
		</button>
	);
};

export default Button;
