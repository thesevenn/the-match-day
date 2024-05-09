interface MonthInit {
	year: number;
	month: number;
	dayOnFirst: number;
	daysInMonth: number;
}

export function extractMonth(date: string): MonthInit | undefined {
	if (!date) return;
	else {
		const dateObject: Date = new Date(date);
		const month: number = dateObject.getMonth();
		const year: number = dateObject.getFullYear();
		const dayOnFirst: number = new Date(year, month, 1).getDay();
		const daysInMonth = new Date(year, month + 1, 0).getDate();

		const monthCalendarInit: MonthInit = {
			year: year,
			month: month,
			daysInMonth: daysInMonth,
			dayOnFirst: dayOnFirst,
		};

		// day and date
		/* 
		  {
			year:2024,
			month:04,
			totalDays:31,
			startDay:0
			calendar:[01,31]
		  }
		*/
		/* 
		
		print empty cells for days - if sunday(0) no empty cell
		monday(1) 1 empty cell
		tuesday(2) 2empty cell and so on
		*/
		/* 
		filter out the matches for the current month
		then have a pointer that marks the current match in filtered array,
		and if the date matches with month calendar date, then show on ui, increment pointer to
		point next match if found repeat
		O(n) for filterning, O(n) for calendar and matching 
		*/

		return monthCalendarInit;
	}
}
