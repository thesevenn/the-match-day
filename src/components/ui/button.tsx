import {FC, HTMLAttributes} from "react";

import {buttonVariants} from "../../types/button-variants.type";
interface propType extends HTMLAttributes<HTMLButtonElement> {
	children: React.ReactNode;
	variant?: buttonVariants;
}

const Button: FC<propType> = ({children, variant}) => {
	return (
		<button
			type="button"
			aria-roledescription="selection confirmation button"
			className={`min-w-60 ${
				variant ? variant : buttonVariants.default
			} rounded-full px-8 py-4 font-medium text-base transition-all shadow-lg hover:scale-[0.98] hover:shadow-xl`}
		>
			{children}
		</button>
	);
};

export default Button;
