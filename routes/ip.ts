import express, {type Request, type Response} from 'express';
import {parse, type Language} from 'accept-language-parser';
import {
	type IpResponse,
	COUNTRY,
	FORWARDED,
	TIMEZONE,
	LATITUDE,
	LONGITUDE,
	COUNTRY_REGION,
	CITY,
} from '../types/ip';
import {type Country, getCountry} from '../utilities/country';

const ipRouter = express.Router();

ipRouter.get('/ip', async (request: Request, response: Response) => {
	try {
		const country: Country | undefined = await getCountry(
			request.headers[COUNTRY] ?? undefined,
		);
		const language: Language | undefined
      = parse(request.headers['accept-language'])[0] ?? undefined;
		const responseData: IpResponse = {
			query: request.clientIp ?? request.headers[FORWARDED],
			timezone: request.headers[TIMEZONE] ?? undefined,
			lang: language !== undefined ? language.code : undefined,
			location: {
				latitude: request.headers[LATITUDE] ?? undefined,
				longitude: request.headers[LONGITUDE] ?? undefined,
			},
			region_code: request.headers[COUNTRY_REGION] ?? undefined,
			country_code: request.headers[COUNTRY] ?? undefined,
			city: request.headers[CITY] ?? undefined,
			country:
        country !== undefined
        	? country.name
        	: request.headers[COUNTRY] ?? undefined,
		};
		response.status(200).json(responseData);
	} catch (error: any) {
		response.status(400).end(error.toString());
	}
});

export default ipRouter;
