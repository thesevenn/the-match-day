export type NetlifyRequest = {
	method: string;
	url: string;
	headers: {[key: string]: string};
	queryStringParameters: string;
};
