import User from "../models/usermodel.js";


export const signUpUser = async (req, res) => {
    try {
    await User.create(req.body);
    res.status(201).json({ msg: "user created" });
    } catch (error) {
    res.send(error.message);
    }
};
export const findUsers = async (req, res) => {
    try {
    const user = await User.findAll({
        attributes:[
        'username',
        'name',
        'phone',
        'email']
    });
    res.status(200).json(users);
    } catch (error) {
    res.send(error.message);
    }
};