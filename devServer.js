import app from "./app.js";
import routes from "./routes/router.js";

app.use("/", routes);

app.listen(app.get("port"), function () {
  console.log("Server started. Go to http://localhost:" + app.get("port"));
});
