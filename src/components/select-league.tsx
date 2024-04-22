import {FC, useState, useEffect, useRef} from "react";

import {ChevronLeft, ChevronRight} from "lucide-react";

import MaxWidthWrapper from "./ui/max-width-wrapper";
import Button from "./ui/button";
import League from "./league";
import {leagues} from "../data/leagues";
// import SliderInteractions from "../lib/helper/slider-interaction";

interface propType {}
const SelectLeague: FC<propType> = () => {
	const sliderRef = useRef<HTMLDivElement>(null);
	const [current, setCurrent] = useState<number>(0);
	const [scrollWidth, setScrollWidth] = useState<number>(0);
	const [width, setWidth] = useState<number>(250);

	function calculateWidth() {
		if (sliderRef.current) {
			const sliderWidth = sliderRef.current.scrollWidth;
			// const offset = sliderRef.current.offsetWidth;
			const gap: number = parseInt(getComputedStyle(sliderRef.current).gap);
			console.log(gap, "gap");
			setWidth(sliderWidth / (leagues.length - 1) + gap);
			setWidth(250 + gap);
			setScrollWidth(sliderWidth);
		}
	}
	useEffect(() => {
		// css styles are not available on first render (gap,etc),
		// certain delay makes it possible for styles to be applied
		// and access with js
		const timeout = setTimeout(calculateWidth, 1000);
		console.log("First time");
		return () => clearTimeout(timeout);
	}, []);

	useEffect(() => {
		window.addEventListener("resize", calculateWidth);
		return () => window.removeEventListener("resize", calculateWidth);
	}, []);

	console.log(width, "width");
	console.log(current, "current");
	console.log(scrollWidth);
	function handleChangeLeft() {
		setCurrent(prev => {
			if (prev == 0) {
				return leagues.length - 2;
			} else return prev - 1;
		});
	}
	function handleChangeRight() {
		setCurrent(prev => {
			if (prev >= leagues.length - 1) return 0;
			else return prev + 1;
		});
	}

	// const crestRef = useRef<HTMLImageElement>(null);

	return (
		<section className="select-league w-full h-screen flex justify-center bg-pl-500">
			<MaxWidthWrapper>
				<div className="flex flex-col items-center justify-between w-full py-12 h-full gap-8">
					<h1 className="text-white text-2xl font-semibold">Select League</h1>
					<div className="flex flex-col w-full items-center gap-12">
						<div className="slider-carousel w-[250px] overflow-hidden flex justify-center">
							<div
								className="slider w-full flex transition-transform gap-8 sm:gap-28"
								style={{transform: `translateX(${-current * width}px)`}}
								ref={sliderRef}
							>
								{leagues.map((league, index) => (
									<League {...league} key={league.name} index={index} />
								))}
							</div>
						</div>
						<div>
							<div className="select-arrow bg-dark-100 text-white px-6 py-6 rounded-md max-w-[300px] w-[300px]">
								<div className="flex gap-6 items-center text-center">
									<i
										tabIndex={1}
										className="grow-0 hover:text-white/40 focus:text-white/40 focus:scale-95 cursor-pointer"
										onClick={handleChangeLeft}
									>
										<ChevronLeft />
									</i>
									<span className="grow capitalize">Hero ISL</span>
									<i
										tabIndex={2}
										className="grow-0 hover:text-white/40 focus:text-white/40 focus:scale-95 cursor-pointer"
										onClick={handleChangeRight}
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
