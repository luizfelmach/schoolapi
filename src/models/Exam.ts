import { Model, DataTypes } from "sequelize";
import db from "../database/connection";

class Exam extends Model {}

Exam.init(
  {
    id: {
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize: db,
  }
);

db.sync();

export default Exam;
