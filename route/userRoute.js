import express from "express";
import {
    signUpUser,
    findUsers,
} from "../controllers/usercontroller.js";

const router = express.Router();

router.post("/users", signUpUser);
router.get("/users", findUsers);


export default router;