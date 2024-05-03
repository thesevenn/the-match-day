import {FC, useEffect, useState} from "react";

import {Fixture} from "../types/match";

interface propType {}
const CalendarView: FC<propType> = () => {
	const [fixtures, setFixtures] = useState<Array<Fixture>>([]);
	useEffect(() => {
		const cachedFixtures: string = localStorage.getItem("fixtures")!;
		if (cachedFixtures && cachedFixtures.length > 2) {
			const data = JSON.parse(cachedFixtures);
			// formatting

			console.log(data);
			setFixtures(data);
		}
	}, []);
	return (
		<>
			<div className="bg-generic-100 w-full">
				<h2 className="font-bold text-lg sm:text-2xl mb-4">Calendar View</h2>
			</div>
			<div className="calendar">
				<div className="week-days w-full grid grid-cols-7 text-primary-500 text-sm gap-1">
					<span className="bg-dark-200/70 text-center rounded-md p-1">Sun</span>
					<span className="bg-dark-200/70 text-center rounded-md p-1">Mon</span>
					<span className="bg-dark-200/70 text-center rounded-md p-1">Tue</span>
					<span className="bg-dark-200/70 text-center rounded-md p-1">Wed</span>
					<span className="bg-dark-200/70 text-center rounded-md p-1">Thu</span>
					<span className="bg-dark-200/70 text-center rounded-md p-1">Fri</span>
					<span className="bg-dark-200/70 text-center rounded-md p-1">Sat</span>
				</div>
			</div>
		</>
	);
};

export default CalendarView;
