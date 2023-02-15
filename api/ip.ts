import app from "../app";
import ipRouter from "../routes/ip";

app.use("/api/", ipRouter);

export default app;
