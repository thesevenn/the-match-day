import {FC} from "react";

import {buttonVariants} from "../../types/button-variants";
interface propType {
	children: React.ReactNode;
	variant: buttonVariants;
}
const Button: FC<propType> = ({children}) => {
	return <button className="">{children}</button>;
};

export default Button;
