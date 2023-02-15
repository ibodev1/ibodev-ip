import express, { Request, Response, NextFunction } from "express";
const userAgentRouter = express.Router();

userAgentRouter.get(
  "/useragent",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      let userAgentIs = (useragent: any) => {
        let r = [];
        for (let i in useragent) if (useragent[i] === true) r.push(i);
        return r;
      };

      const data = {
        //@ts-ignore
        browser: req.useragent.browser,
        //@ts-ignore
        version: req.useragent.version,
        //@ts-ignore
        os: req.useragent.os,
        //@ts-ignore
        platform: req.useragent.platform,
        //@ts-ignore
        geoIp: req.useragent.geoIp,
        //@ts-ignore
        source: req.useragent.source,
        //@ts-ignore
        is: userAgentIs(req.useragent)
      };
      res.status(200).json(data);
    } catch (error: any) {
      res.status(400).end(error.toString());
    }
  }
);

export default userAgentRouter;
