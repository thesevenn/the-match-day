export async function getPredictions(fixtureId: number) {
	if (!fixtureId) return;
	else {
		const params = new URLSearchParams({
			fixture: fixtureId.toString(),
		});

		// const res = await fetch(
		// 	`${import.meta.env.VITE_BASE_URL}/predictions?${params}`,
		// 	{headers: {"x-apisports-key": import.meta.env.VITE_KEYTARGET_API}}
		// );
		const res = await fetch("/.netlify/functions/predictions?" + params);
		return await res.json();
	}
}
