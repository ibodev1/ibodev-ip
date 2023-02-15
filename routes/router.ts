import express from "express";
const routes = express.Router();
import ipRouter from "./ip";
import userAgentRouter from "./useragent";

routes.use("/", ipRouter);
routes.use("/", userAgentRouter);

export default routes;
