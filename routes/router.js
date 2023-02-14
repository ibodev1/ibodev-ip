import express from "express";
const routes = express.Router();
import ipRouter from "./ip.js";
import userAgentRouter from "./useragent.js";

routes.use("/", ipRouter);
routes.use("/", userAgentRouter);

export default routes;
