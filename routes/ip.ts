import express from "express";
import { IpResponse } from "../types/ip";
const ipRouter = express.Router();

ipRouter.get("/ip", async (req, res, next) => {
  try {
    console.log(req.headers);
    const data: IpResponse = {
      query: req.clientIp || req.headers["x-vercel-forwarded-for"]
    };
    res.status(200).json(data);
  } catch (error: any) {
    res.status(400).end(error.toString());
  }
});

export default ipRouter;
