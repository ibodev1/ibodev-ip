import app from "../app.js";

app.get("/api/", (req, res, next) => {
  res.status(200).json({
    ip: "/api/ip",
    useragent: "/api/useragent"
  });
});

export default app;
