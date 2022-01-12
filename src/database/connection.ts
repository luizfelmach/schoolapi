import { Sequelize } from "sequelize";

const db = new Sequelize("api", "postgres", "postgres", {
  host: "localhost",
  port: 5432,
  dialect: "postgres",
  logging: false,
});

export default db;
