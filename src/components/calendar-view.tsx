import {FC, useEffect, useState} from "react";

import {ChevronRight, ChevronLeft} from "lucide-react";

import {Fixture} from "../types/fixture.type";
import {extractMonth} from "../lib/extract-month";
import {MONTHSINWORDS} from "../data/monthsInWords";

interface FixtureCalendar {
	date: number;
	fixtureToday: Fixture | null;
}

interface propType {
	fixtures: Array<Fixture>;
	selectedTeam: string | undefined;
}
const CalendarView: FC<propType> = ({selectedTeam, fixtures}) => {
	// const [fixtures, setFixtures] = useState<Array<Fixture>>([]);
	const [calendar, setCalendar] = useState<Array<FixtureCalendar>>([]);
	const [daysFromMonthStart, setDaysFromMonthStart] = useState<number>(-1);
	const [month, setMonth] = useState<number>(new Date().getMonth());
	useEffect(() => {
		const cachedFixtures: string = localStorage.getItem("fixtures")!;
		if (cachedFixtures && cachedFixtures.length > 2) {
			const data = JSON.parse(cachedFixtures);
			// formatting
			const value = data[0].date;
			console.log(value, "helo");
			console.log(extractMonth(value));
			// setFixtures(data);
		}
	}, []);

	useEffect(() => {
		function generateMonthCalendar() {
			console.log(fixtures.length, "len");
			if (fixtures.length) {
				console.log(fixtures, "inside func");
				const fixturesThisMonth = fixtures
					.filter(fixture => {
						return new Date(fixture.date).getMonth() == month;
					})
					.sort((a, b) => (a.date < b.date ? 0 : 1));
				console.log(fixturesThisMonth);
				if (fixturesThisMonth.length > 0) {
					const monthInit = extractMonth(fixturesThisMonth[0].date);
					setDaysFromMonthStart(monthInit?.dayOnFirst || 0);

					let currentFixtureInMonth = 0;
					const calendarWithFixtures = Array(monthInit?.daysInMonth)
						.fill(0)
						.map((_, index) => {
							if (
								currentFixtureInMonth < fixturesThisMonth.length &&
								new Date(
									fixturesThisMonth[currentFixtureInMonth].date
								).getDate() ==
									index + 1
							) {
								return {
									date: index + 1,
									fixtureToday: fixturesThisMonth[currentFixtureInMonth++],
								};
							}
							return {date: index + 1, fixtureToday: null};
						});
					setCalendar(calendarWithFixtures);
				} else {
					setCalendar([]);
				}
			}
		}
		generateMonthCalendar();
	}, [fixtures, month]);

	// add the select option to select month on top

	return (
		<>
			<div className="bg-generic-100 w-full">
				<h2 className="font-bold text-lg sm:text-2xl mb-4">Calendar View</h2>
				{/* <div className="grid grid-cols-2 w-full max-w-48 overflow-hidden rounded-lg absolute z-10 top-1/2 right-1/2">
					{MONTHSINWORDS.map(item => (
						<button
							key={item}
							className="bg-dark-200/30 rounded-none transition-colors hover:rounded-sm hover:bg-dark-200/50 text-sm"
						>
							{item}
						</button>
					))}
				</div> */}
			</div>

			{calendar.length == 0 ? (
				<NoCalendarPresent />
			) : (
				<MonthCalendar
					calendar={calendar}
					daysFromMonthStart={daysFromMonthStart}
					selectedTeam={selectedTeam}
				/>
			)}

			<div className="flex items-center justify-center mb-16 md:mb-4">
				<button
					className="bg-transparent group"
					onClick={() => setMonth(prev => (prev > 0 ? prev - 1 : 11))}
				>
					<ChevronLeft className="group-hover:text-white/70 transition-colors group-hover:scale-[0.97]" />
				</button>
				<span className="w-16 text-center cursor-default">
					{MONTHSINWORDS[month]}
				</span>
				<button
					className="bg-transparent group hover:text-white/70 transition-colors"
					onClick={() => setMonth(prev => (prev >= 11 ? 0 : prev + 1))}
				>
					<ChevronRight className="group-hover:text-white/70 transition-colors group-hover:scale-[0.97]" />
				</button>
			</div>
		</>
	);
};

export default CalendarView;

interface MonthCalendarProps {
	daysFromMonthStart: number;
	calendar: Array<FixtureCalendar>;
	selectedTeam: string | undefined;
}

const MonthCalendar: FC<MonthCalendarProps> = ({
	daysFromMonthStart,
	calendar,
	selectedTeam,
}) => {
	return (
		<div className="calendar mb-4">
			<div className="week-days w-full grid grid-cols-7 text-primary-500 text-sm gap-1 mb-1">
				<span className="bg-dark-200/70 text-center rounded-md p-1">Sun</span>
				<span className="bg-dark-200/70 text-center rounded-md p-1">Mon</span>
				<span className="bg-dark-200/70 text-center rounded-md p-1">Tue</span>
				<span className="bg-dark-200/70 text-center rounded-md p-1">Wed</span>
				<span className="bg-dark-200/70 text-center rounded-md p-1">Thu</span>
				<span className="bg-dark-200/70 text-center rounded-md p-1">Fri</span>
				<span className="bg-dark-200/70 text-center rounded-md p-1">Sat</span>
			</div>

			<div className="calendar w-full grid grid-cols-7 overflow-hidden rounded-md">
				{daysFromMonthStart != -1 &&
					Array(daysFromMonthStart)
						.fill(0)
						.map((_, index) => (
							<span
								key={index}
								className="bg-dark-200/70 text-center p-1 h-24 border-[1px] border-solid border-dark-200/50"
							>
								{" "}
							</span>
						))}
				{calendar.length > 0 &&
					calendar.map(item => (
						<span
							key={item.date}
							className="bg-dark-200/70 text-center text-lg font-semibold h-24 p-1 border-[1px] border-solid border-dark-200/50 flex justify-center items-center"
						>
							{item.fixtureToday == null ? (
								item.date
							) : (
								<span className="text-sm font-normal lowercase">
									vs
									<img
										className="w-full max-w-[56px] object-contain"
										src={
											item.fixtureToday.teams.home.id ==
											parseInt(selectedTeam || "")
												? item.fixtureToday.teams.away.logo
												: item.fixtureToday.teams.home.logo
										}
										alt={
											item.fixtureToday.teams.home.id ==
											parseInt(selectedTeam || "")
												? item.fixtureToday.teams.away.name
												: item.fixtureToday.teams.home.name
										}
									/>
								</span>
							)}
						</span>
					))}
			</div>
		</div>
	);
};

const NoCalendarPresent = () => {
	return (
		<div className="w-full h-[50vh] bg-dark-200/70 border-[1px] border-solid border-white/10 rounded-md flex items-center justify-center flex-col">
			<p className="text-sm text-white/80 w-auto normal-case">
				Your team have no matches this month
			</p>
		</div>
	);
};
