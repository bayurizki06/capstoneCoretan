import { DataTypes } from "sequelize";
import coursedb from "../config/coursesdb.js";

const course = coursedb.define("datacourse", {
    courseid: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    },
    coursename: {
    type: DataTypes.STRING,
    },
    coursetype: {
    type: DataTypes.STRING,
    },
    courselevel: {
    type: DataTypes.STRING,
    },
});

export default course;

  // If table "Appointment" doesn't exist, this function creates it

(async () => {
    await db.sync();
})();