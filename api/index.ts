import { readFileSync } from "fs";
import path from "path";
import { NextFunction, Request, Response } from "express";
import app from "../app";

app.get("/api/", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const packagePath = path.join(process.cwd(), "package.json");
    const packageData = JSON.parse(await readFileSync(packagePath, "utf8"));
    res.status(200).json({
      version: packageData.version,
      ...packageData.response
    });
  } catch (error: any) {
    res.status(400).end(error.toString());
  }
});

export default app;
