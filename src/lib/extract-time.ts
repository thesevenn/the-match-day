export function extractTime(date: Date): string {
	const formattedDate = new Date(date);
	const hours: number = formattedDate.getHours();
	const minutes: number = formattedDate.getMinutes();
	const time: string = `${hours}:${minutes}`;
	return time;
}
