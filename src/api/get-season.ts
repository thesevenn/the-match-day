export async function getSeasonOfTeam(
	team: string,
	season: string,
	league?: string
) {
	if (!team) return;
	else {
		let params: URLSearchParams;
		if (league != undefined) {
			params = new URLSearchParams({
				season: season,
				team: team,
				league: league,
			});
		} else {
			params = new URLSearchParams({
				season: season,
				team: team,
			});
		}

		const res = await fetch("/.netlify/functions/season?" + params);
		return await res.json();
	}
}
