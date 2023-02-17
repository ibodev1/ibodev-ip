import {Language} from 'accept-language-parser';

export type IpResponse = {
	query: string | string[] | undefined | undefined;
	timezone: string[] | string | undefined | undefined;
	lang: string[] | string | undefined | undefined;
	location: Location;
	region_code: string[] | string | undefined | undefined;
	country_code: string[] | string | undefined | undefined;
	city: string[] | string | undefined | undefined;
	country: string[] | string | undefined;
};

export type Location = {
	latitude: string[] | string | undefined | undefined;
	longitude: string[] | string | undefined | undefined;
};

const COUNTRY = 'x-vercel-ip-country';
const FORWARDED = 'x-vercel-forwarded-for';
const TIMEZONE = 'x-vercel-ip-timezone';
const LATITUDE = 'x-vercel-ip-latitude';
const LONGITUDE = 'x-vercel-ip-longitude';
const COUNTRY_REGION = 'x-vercel-ip-country-region';
const CITY = 'x-vercel-ip-city';

export {
	COUNTRY,
	FORWARDED,
	TIMEZONE,
	LATITUDE,
	LONGITUDE,
	COUNTRY_REGION,
	CITY,
};
