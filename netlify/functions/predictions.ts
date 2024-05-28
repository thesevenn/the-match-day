import axios from "axios";

import {NetlifyRequest} from "../../src/types/netlify-request";

export const handler = async (req: NetlifyRequest) => {
	const params = new URLSearchParams(req.queryStringParameters);
	const res = await axios(
		"https://v3.football.api-sports.io/predictions?" + params,
		{headers: {"x-apisports-key": process.env.KEYTARGET_API}}
	);

	return {
		statusCode: 200,
		body: JSON.stringify({
			...res.data,
		}),
	};
};
