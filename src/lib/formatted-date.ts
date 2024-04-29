export function formattedDate(date: Date): string {
	const months: Array<string> = [
		"Jan",
		"Feb",
		"Mar",
		"Apr",
		"May",
		"Jun",
		"Jul",
		"Aug",
		"Sep",
		"Oct",
		"Nov",
		"Dec",
	];
	const dateObject = new Date(date);
	const month: string = months[dateObject.getMonth()];
	const year: number = dateObject.getFullYear();
	const day: number = dateObject.getDate();

	const formattedDate: string = `${month} ${day > 9 ? day : "0" + day} ${year}`;
	return formattedDate;
}
