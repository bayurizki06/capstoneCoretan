import course from "../models/coursemodel.js";

export const AddCourse = async (req, res) => {
    try {
        const course = await course.create({
        });
        res.status(201).json({ msg: "course Added"});
    } catch (error) {
        console.error(error); 
        res.status(500).json({ msg: "course cannot be Added" });
    }
};

export const findAllcourses = async (req, res) => {
    try {
        const courses = await course.findAll();
        res.status(200).json({msg: "pencarian berhasil"});
    } catch (error) {
        console.error(error); 
        res.status(500).json({ msg: "Internal server error" });
    }
};
