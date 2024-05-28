export async function getPredictions(fixtureId: number) {
	if (!fixtureId) return;
	else {
		const params = new URLSearchParams({
			fixture: fixtureId.toString(),
		});

		const res = await fetch("/.netlify/functions/predictions?" + params);
		return await res.json();
	}
}
