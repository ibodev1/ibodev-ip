import express from "express";
import cors from "cors";
import helmet from "helmet";
import useragent from "express-useragent";
import requestIp from "request-ip";
import logger from "morgan";

const PORT = process.env.PORT || 5000;
const app = express();

app.use(logger("dev"));
app.set("port", PORT);
app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(function (req, res, next) {
  res.removeHeader("X-Powered-By");
  next();
});
app.use(express.urlencoded({ extended: false }));
app.use(useragent.express());
app.use(requestIp.mw());

export default app;
