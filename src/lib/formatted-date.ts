import {monthsInWord} from "../data/monthsInWords";

export function formattedDate(date: string): string {
	const months = monthsInWord;
	const dateObject = new Date(date);
	const month: string = months[dateObject.getMonth()];
	const year: number = dateObject.getFullYear();
	const day: number = dateObject.getDate();

	const formattedDate: string = `${month} ${day > 9 ? day : "0" + day} ${year}`;
	return formattedDate;
}
