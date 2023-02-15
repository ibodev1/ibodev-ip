import { NextFunction, Request, Response } from "express";
import app from "../app";

app.get("/api/", (req: Request, res: Response, next: NextFunction) => {
  res.status(200).json({
    ip: "/api/ip",
    useragent: "/api/useragent"
  });
});

export default app;
