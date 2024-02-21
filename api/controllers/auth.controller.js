import User from "../models/user.model.js";
import bcryprjs from 'bcryptjs'

export const add_new_user = async (req, res) => {
    const { name, username, password, parent_domain, role } = req.body;
    const hashedPassword = bcryprjs.hashSync(password, 10);

    const newUser = new User({ name, username, password:hashedPassword, parent_domain, role });
    try {
        await newUser.save();
        res.status(201).json({ message: "User created successfully" });
    } catch (error) {
        res.status(500).json(error.message);
    }
}; 