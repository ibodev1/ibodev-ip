import express from "express";
const ipRouter = express.Router();

ipRouter.get("/ip", async (req, res, next) => {
  try {
    console.log(req.clientIp);
    const data = {
      query: req.clientIp || req.headers["x-vercel-forwarded-for"],
      headers: req.headers,
      resHeaders: res.getHeaders()
    };
    res.status(200).json(data);
  } catch (error) {
    res.status(400).end(error.toString());
  }
});

export default ipRouter;
