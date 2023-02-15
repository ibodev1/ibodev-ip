import express, { Request, Response, NextFunction } from "express";
import { Details } from "express-useragent";
import { UserAgentResponse } from "../types/useragent";
const userAgentRouter = express.Router();

userAgentRouter.get(
  "/useragent",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      let userAgentIs = (useragent: Details | undefined | any): string[] => {
        let r = [];
        for (let i in useragent) if (useragent[i] === true) r.push(i);
        return r;
      };

      const responseData: UserAgentResponse = {
        browser: req.useragent?.browser,
        version: req.useragent?.version,
        os: req.useragent?.os,
        platform: req.useragent?.platform,
        geoIp: req.useragent?.geoIp,
        source: req.useragent?.source,
        is: userAgentIs(req.useragent || undefined)
      };
      res.status(200).json(responseData);
    } catch (error: any) {
      res.status(400).end(error.toString());
    }
  }
);

export default userAgentRouter;
