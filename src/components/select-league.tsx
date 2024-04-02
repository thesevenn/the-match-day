import {FC, useRef, useState} from "react";

import MaxWidthWrapper from "./ui/max-width-wrapper";

interface propType {}
const SelectLeague: FC<propType> = () => {
	const [count, setCount] = useState<number>(0);
	const ref = useRef<HTMLDivElement>(null);
	return (
		<section className="select-league w-full h-screen flex justify-center">
			<MaxWidthWrapper>
				<div className="slider-container w-full bg-red-200 overflow-hidden">
					<div
						className="slider flex gap-4 cursor-grab"
						ref={ref}
						onMouseDown={() => setCount(prev => prev + 1)}
						onMouseUp={() => {
							return (
								ref.current &&
								(ref.current.style.transform = `translateX(-${200 * count}px)`)
							);
						}}
					>
						<div className="slide w-2/3 shrink-0 bg-green-200">
							Premier League
						</div>
						<div className="slide w-2/3 shrink-0 bg-orange-300">LaLiga</div>
						<div className="slide w-2/3 shrink-0 bg-red-300">Bundesliga</div>
						<div className="slide w-2/3 shrink-0 bg-purple-300">SerieA</div>
						<div className="slide w-2/3 shrink-0 bg-blue-300">Ligue One</div>
						<div className="slide w-2/3 shrink-0 bg-gray-300">
							Indian Super League
						</div>
					</div>
				</div>
			</MaxWidthWrapper>
		</section>
	);
};

export default SelectLeague;
