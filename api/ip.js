import app from "../app.js";
import ipRouter from "../routes/ip.js";

app.use("/api/", ipRouter);

export default app;
