import app from "../app";
import userAgentRouter from "../routes/useragent";

app.use("/api/", userAgentRouter);

export default app;
