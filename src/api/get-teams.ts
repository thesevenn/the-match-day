export async function getTeamsOfLeague(league: number, season: number) {
	if (!league) return;
	else {
		const params = new URLSearchParams({
			league: league as unknown as string,
			season: season as unknown as string,
		});

		const res = await fetch(`/.netlify/functions/teams?${params}`);
		const data = await res.json();
		return data;
	}
}
