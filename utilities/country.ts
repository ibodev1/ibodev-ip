import { readFileSync } from "fs";
import path from "path";

export interface Country {
  name: string | undefined;
  "alpha-2": string | undefined;
  "country-code": string | undefined;
}

const getCountry = async (
  iso: string[] | string | undefined = undefined
): Promise<Country | undefined> => {
  try {
    if (iso !== null && iso !== undefined) {
      const filePath = path.join(process.cwd(), "json", "data.json");
      const jsonData = JSON.parse(readFileSync(filePath, "utf8"));
      const findedCountry = jsonData.filter((country: Country) => {
        return country["alpha-2"] === iso;
      });
      return findedCountry[0] || undefined;
    } else {
      return undefined;
    }
  } catch (error: any) {
    return error;
  }
};

export { getCountry };
