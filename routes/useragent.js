import express from "express";
const userAgentRouter = express.Router();

userAgentRouter.get("/useragent", async (req, res, next) => {
  try {
    let userAgentIs = (useragent) => {
      let r = [];
      for (let i in useragent) if (useragent[i] === true) r.push(i);
      return r;
    };
    const data = {
      browser: req.useragent.browser,
      version: req.useragent.version,
      os: req.useragent.os,
      platform: req.useragent.platform,
      geoIp: req.useragent.geoIp,
      source: req.useragent.source,
      is: userAgentIs(req.useragent)
    };
    res.status(200).json(data);
  } catch (error) {
    res.status(400).end(error.toString());
  }
});

export default userAgentRouter;
