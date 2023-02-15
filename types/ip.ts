import { Language } from "accept-language-parser";
export interface IpResponse {
  query: string | string[] | undefined | null;
  timezone: string[] | string | undefined | null;
  lang: string[] | string | undefined | null;
  location: Location;
  region_code: string[] | string | undefined | null;
  country_code: string[] | string | undefined | null;
  city: string[] | string | undefined | null;
  country: string[] | string | undefined;
}

export interface Location {
  latitude: string[] | string | undefined | null;
  longitude: string[] | string | undefined | null;
}

const COUNTRY: string = "x-vercel-ip-country";
const FORWARDED: string = "x-vercel-forwarded-for";
const TIMEZONE: string = "x-vercel-ip-timezone";
const LATITUDE: string = "x-vercel-ip-latitude";
const LONGITUDE: string = "x-vercel-ip-longitude";
const COUNTRY_REGION: string = "x-vercel-ip-country-region";
const CITY: string = "x-vercel-ip-city";

export {
  COUNTRY,
  FORWARDED,
  TIMEZONE,
  LATITUDE,
  LONGITUDE,
  COUNTRY_REGION,
  CITY
};
