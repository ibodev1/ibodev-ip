import express, { Request, Response } from "express";
import { parse, Language } from "accept-language-parser";
import {
  IpResponse,
  COUNTRY,
  FORWARDED,
  TIMEZONE,
  LATITUDE,
  LONGITUDE,
  COUNTRY_REGION,
  CITY
} from "../types/ip";
import { Country, getCountry } from "../utilities/country";
const ipRouter = express.Router();

ipRouter.get("/ip", async (req: Request, res: Response) => {
  try {
    const country: Country | undefined = await getCountry(
      req.headers[COUNTRY] || undefined
    );
    const language: Language | undefined =
      parse(req.headers["accept-language"])[0] || undefined;
    const responseData: IpResponse = {
      query: req.clientIp || req.headers[FORWARDED],
      timezone: req.headers[TIMEZONE] || undefined,
      lang: language !== undefined ? language.code : undefined,
      location: {
        latitude: req.headers[LATITUDE] || undefined,
        longitude: req.headers[LONGITUDE] || undefined
      },
      region_code: req.headers[COUNTRY_REGION] || undefined,
      country_code: req.headers[COUNTRY] || undefined,
      city: req.headers[CITY] || undefined,
      country:
        country !== undefined ? country.name : req.headers[COUNTRY] || undefined
    };
    res.status(200).json(responseData);
  } catch (error: any) {
    res.status(400).end(error.toString());
  }
});

export default ipRouter;
