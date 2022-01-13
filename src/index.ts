import * as dotenv from "dotenv";
dotenv.config();

import express, { json } from "express";
import { routes } from "./routes";
import { serverPort } from "./configs/endpoints.config";
import "./database/connection";

const app = express();

app.use(json());
app.use("/api", routes);

app.listen(serverPort, () => {
  console.log(`Server running on port ${serverPort}.`);
});
