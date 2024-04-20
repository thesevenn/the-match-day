import {FC} from "react";

import {ChevronLeft, ChevronRight} from "lucide-react";

import MaxWidthWrapper from "./ui/max-width-wrapper";
import Button from "./ui/button";
import League from "./league";
import {leagues} from "../data/leagues";
// import SliderInteractions from "../lib/helper/slider-interaction";

interface propType {}
const SelectLeague: FC<propType> = () => {
	// const [current, setCurrent] = useState<number>(0);
	// const [dragging, setDragging] = useState<boolean>(false);
	// const [moveDirectionLeft, setMoveDirectionLeft] = useState(false);
	// const [mouseStart, setMouseStart] = useState<number>(0);
	// const [willChange, setWillChange] = useState<boolean>(false);

	// const crestRef = useRef<HTMLImageElement>(null);
	// const sliderRef = useRef<HTMLDivElement>(null);
	// const [sliderWidth, setSliderwidth] = useState<number>(
	// 	(sliderRef.current?.scrollWidth || 0) -
	// 		(sliderRef.current?.clientWidth || 0) || 0
	// );

	// useEffect(() => {
	// 	function updateWidth() {
	// 		setSliderwidth(
	// 			(sliderRef.current?.scrollWidth || 0) -
	// 				(sliderRef.current?.clientWidth || 0) || 0
	// 		);
	// 	}
	// 	window.addEventListener("resize", updateWidth);

	// 	return () => window.removeEventListener("resize", updateWidth);
	// }, []);

	return (
		<section className="select-league w-full h-screen flex justify-center bg-pl-500">
			<MaxWidthWrapper>
				<div className="flex flex-col items-center justify-between w-full py-12 h-full gap-8">
					<h1 className="text-white text-2xl font-semibold">Select League</h1>
					<div className="flex flex-col w-full items-center gap-12">
						<div className="slider-carousel w-full overflow-hidden">
							<div className="slider w-full flex transition-transform gap-28 justify-center">
								{/*
								<img
									src="/pl.svg"
									alt=""
									className="slide w-[80%] md:ml-[35%] object-contain flex-shrink-0 max-w-[300px] pointer-events-none"
									ref={crestRef}
									onClick={() =>
										console.log(crestRef.current?.getBoundingClientRect().width)
									}
								/>
								<img
									src="/pl.svg"
									alt=""
									className="slide w-[80%] object-contain flex-shrink-0 max-w-[300px]"
								/>
								<img
									src="/pl.svg"
									alt=""
									className="slide  w-[80%] object-contain flex-shrink-0 max-w-[300px]"
								/>
								*/}
								{leagues.map((league, index) => (
									<League
										src={league.src}
										alt={league.alt}
										key={league.name}
										index={index}
									/>
								))}
							</div>
						</div>
						<div>
							<div className="select-arrow bg-dark-100 text-white px-6 py-6 rounded-md max-w-[300px] w-[300px]">
								<div className="flex gap-6 items-center text-center">
									<i
										tabIndex={1}
										className="grow-0 hover:text-white/40 focus:text-white/40 focus:scale-95 cursor-pointer"
									>
										<ChevronLeft />
									</i>
									<span className="grow capitalize">Hero ISL</span>
									<i
										tabIndex={2}
										className="grow-0 hover:text-white/40 focus:text-white/40 focus:scale-95 cursor-pointer"
									>
										<ChevronRight />
									</i>
								</div>
							</div>
						</div>
					</div>
					<div className="">
						<Button>Confirm Selection</Button>
					</div>
				</div>
			</MaxWidthWrapper>
		</section>
	);
};

export default SelectLeague;
