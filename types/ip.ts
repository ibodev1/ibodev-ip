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

declare const COUNTRY = "x-vercel-ip-country";
declare const FORWARDED = "x-vercel-forwarded-for";
declare const TIMEZONE = "x-vercel-ip-timezone";
declare const LATITUDE = "x-vercel-ip-latitude";
declare const LONGITUDE = "x-vercel-ip-longitude";
declare const COUNTRY_REGION = "x-vercel-ip-country-region";
declare const CITY = "x-vercel-ip-city";

export {
  COUNTRY,
  FORWARDED,
  TIMEZONE,
  LATITUDE,
  LONGITUDE,
  COUNTRY_REGION,
  CITY
};
