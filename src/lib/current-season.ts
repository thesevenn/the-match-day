export const currentSeason = (): number => {
	const date: Date = new Date();
	const month: number = date.getMonth();
	const season: number =
		month > 5 ? date.getFullYear() : date.getFullYear() - 1;
	return season;
};
