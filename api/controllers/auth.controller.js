import User from "../models/user.model.js";
import bcryprjs from 'bcryptjs'
import { errorHandler } from "../utils/error.js";

export const add_new_user = async (req, resm, next) => {
    const { name, username, parent_domain, email, password, role } = req.body;
    const hashedPassword = bcryprjs.hashSync(password, 10);
    const userEmail = `${username}@${parent_domain}.smartrainer`

    const newUser = new User({ name, username, parent_domain, email:userEmail, password:hashedPassword, role  });
    try {
        await newUser.save();
        res.status(201).json({ message: "User created successfully" });
    } catch (error) {
        // next(errorHandler(300, "Something went wrong"));
        next(error);
    }
};  