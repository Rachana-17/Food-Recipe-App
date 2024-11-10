import { UserModel } from "../Schema/UserSchema.js";
import { hash as _hash } from "bcrypt";
import jwt from "jsonwebtoken";

const Register = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        const user = await UserModel.findOne({ email });
        if (user) {
            return res.json({ error: "User already exists" });
        }
        const token = jwt.sign(email, process.env.SECRET);
        const hash = await _hash(password, 10);
        const newUser = await UserModel.create({ name, email, password: hash });
        res.json({ newUser, token });
    } catch (e) {
        console.error(e.message);
        res.status(500).json({ error: "Internal server error" });
    }
};

export default Register;
