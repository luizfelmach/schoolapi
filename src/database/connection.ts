import { Sequelize } from "sequelize";
import {
  databaseHost,
  databaseName,
  databasePass,
  databasePort,
  databaseUser,
} from "../configs/endpoints.config";

const db = new Sequelize(databaseName, databaseUser, databasePass, {
  host: databaseHost,
  port: +databasePort,
  dialect: "postgres",
  logging: false,
});

export default db;
