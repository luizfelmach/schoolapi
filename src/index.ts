import express, { json } from "express";
import { routes } from "./routes";

import "./database/connection";

const app = express();

app.use(json());
app.use("/api", routes);

app.listen(process.env.SERVER_PORT, () => {
  console.log(`Server running on port ${process.env.SERVER_PORT}.`);
});
