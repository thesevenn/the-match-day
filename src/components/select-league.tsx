import {FC, useState, useEffect, useRef} from "react";

import {ChevronLeft, ChevronRight} from "lucide-react";
import {Link} from "react-router-dom";

import {buttonVariants} from "../types/button-variants.type";
import MaxWidthWrapper from "./ui/max-width-wrapper";
import Button from "./ui/button";
import Slider from "./league";
import {LEAGUES} from "../data/leagues";

interface propType {}
const SelectLeague: FC<propType> = () => {
	const sliderRef = useRef<HTMLDivElement>(null);
	const [current, setCurrent] = useState<number>(0);
	const [width, setWidth] = useState<number>(250);
	function calculateWidth() {
		if (sliderRef.current) {
			const sliderWidth = sliderRef.current.scrollWidth;
			const gap: number = parseInt(getComputedStyle(sliderRef.current).gap);
			setWidth(sliderWidth / (LEAGUES.length - 1) + gap);
			setWidth(250 + gap);
		}
	}
	useEffect(() => {
		async function getTeam() {
			const params = new URLSearchParams({
				league: "140",
				season: "2023",
			});
			const data = await fetch("/.netlify/functions/teams?" + params);
			console.log(await data.json());
		}

		getTeam();
		// css styles are not available on first render (gap,etc),
		// certain delay makes it possible for styles to be applied
		// and access with js
		const timeout = setTimeout(calculateWidth, 1000);
		return () => clearTimeout(timeout);
	}, []);

	useEffect(() => {
		window.addEventListener("resize", calculateWidth);
		return () => window.removeEventListener("resize", calculateWidth);
	}, []);

	function handleChangeLeft() {
		setCurrent(prev => {
			if (prev == 0) {
				return LEAGUES.length - 1;
			} else return prev - 1;
		});
	}
	function handleChangeRight() {
		setCurrent(prev => {
			if (prev >= LEAGUES.length - 1) return 0;
			else return prev + 1;
		});
	}

	return (
		<section
			className={`select-league w-full h-screen flex justify-center`}
			style={{
				backgroundImage: `url(${LEAGUES[current].backdrop})`,
				backgroundPosition: "center",
				backgroundRepeat: "no-repeat",
				backgroundSize: "cover",
			}}
		>
			<div
				className={`w-full h-screen flex justify-center ${LEAGUES[current].background}`}
			>
				<MaxWidthWrapper>
					<div className="flex flex-col items-center justify-between w-full py-12 h-full gap-8">
						<h1 className="text-white text-2xl font-semibold">Select League</h1>
						<div className="flex flex-col w-full items-center gap-12">
							<div className="slider-carousel w-[250px] overflow-hidden flex justify-center">
								<div
									className="slider w-full flex items-end transition-transform ease-in-out gap-8 sm:gap-28"
									style={{transform: `translateX(${-current * width}px)`}}
									ref={sliderRef}
								>
									{LEAGUES.map((league, index) => (
										<Slider
											{...league}
											key={league.name}
											index={index}
											current={current}
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
											onClick={handleChangeLeft}
										>
											<ChevronLeft />
										</i>
										<span className="grow capitalize">
											{LEAGUES[current].name}
										</span>
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
							<Link to={`/app/league/${LEAGUES[current].id}/team`}>
								<Button variant={buttonVariants.secondary}>
									Confirm Selection
								</Button>
							</Link>
						</div>
					</div>
				</MaxWidthWrapper>
			</div>
		</section>
	);
};

export default SelectLeague;
