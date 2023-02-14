import app from "../app.js";
import userAgentRouter from "../routes/useragent.js";

app.use("/api/", userAgentRouter);

export default app;
