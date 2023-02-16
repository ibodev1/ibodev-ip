import express, { Express, NextFunction, Request, Response } from "express";
import cors from "cors";
import helmet from "helmet";
import useragent from "express-useragent";
import requestIp from "request-ip";
import logger from "morgan";

const PORT = process.env.PORT || 5000;
const app: Express = express();

app.use(logger("dev"));
app.set("port", PORT);
app.use(helmet());
app.use(cors());
app.use((req: Request, res: Response, next: NextFunction) => {
  const isHTTPS =
    req.headers["x-forwarded-proto"] &&
    req.headers["x-forwarded-proto"] === "https";
  if (isHTTPS) {
    next();
  } else {
    if (req.method === "GET") {
      res.redirect(301, "https://" + req.headers.host + req.originalUrl);
    } else {
      res
        .status(403)
        .send("Please use HTTPS when submitting data to this server.");
    }
  }
});
app.use(express.json());
app.use((req: Request, res: Response, next: NextFunction) => {
  res.removeHeader("X-Powered-By");
  next();
});
app.use(express.urlencoded({ extended: false }));
app.use(useragent.express());
app.use(requestIp.mw());

export default app;
