import {FC} from "react";

interface propType {
	src: string;
	alt: string;
	index: number;
}
const League: FC<propType> = ({src, alt}) => {
	return (
		<img
			src={src}
			alt={alt}
			className="slide pointer-events-none max-w-[250px] w-full object-contain shrink-0"
		/>
	);
};

export default League;
