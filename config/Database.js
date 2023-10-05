import "dotenv/config";
import { Sequelize } from "sequelize";

const coursedb = new Sequelize(
  "coursedb", 
  "root",
  "patimura2018",
      {
    host : 'localhost',
    dialect: "mysql",
});

coursedb.authenticate()
  .then(() => console.log("Database connected"))
  .catch((error) => {
    console.log(`Unable to connect to database: ${error}`);
  });

export default coursedb;
