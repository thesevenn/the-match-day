export async function getTeamsOfLeague(league: number, season: number) {
	if (!league) return;
	else {
		const params = new URLSearchParams({
			league: league as unknown as string,
			season: season as unknown as string,
		});

		const res = await fetch(
			`${import.meta.env.VITE_BASE_URL}/teams?${params}`,
			{headers: {"x-apisports-key": import.meta.env.VITE_KEYTARGET_API}}
		);
		const data = await res.json();
		return data;
	}
}
