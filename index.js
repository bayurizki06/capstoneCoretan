import express from "express";
import courseroute from "./route/courseroute.js";
import UserRoute from "./route/userRoute.js";
import cors from "cors";
import coursedb from "./config/coursesdb.js";

const app = express();
const PORT = 3200;

app.use(cors());
app.use(express.json());
console.log(coursedb);

app.use(courseroute);
app.use(UserRoute);

app.listen(PORT, () => {
console.log(`Server is up and running on port ${PORT}`);
});
