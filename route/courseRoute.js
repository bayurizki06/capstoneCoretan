import express from "express";
import{
    findAllcourses,
    AddCourse
} from "..controllers/coursecontrollers.js";

const router = express.Router();

router.post("/datacourses", AddCourse);
router.get("/datacourses", findAllcourses);

export default router;
