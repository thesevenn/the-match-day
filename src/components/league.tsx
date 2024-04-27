import {FC} from "react";

interface propType {
	src: string;
	alt: string;
	index: number;
	current: number;
}
const League: FC<propType> = ({src, alt, current, index}) => {
	return (
		<img
			src={src}
			alt={alt}
			className={`slide pointer-events-none max-w-[250px] w-full object-contain shrink-0 ${
				current != index && "scale-50 opacity-50 transition-all delay-100"
			}`}
		/>
	);
};

export default League;
