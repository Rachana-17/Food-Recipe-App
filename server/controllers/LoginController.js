import { UserModel } from "../Schema/UserSchema.js";
import { compare } from "bcrypt";
import jwt from "jsonwebtoken";
const Login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await UserModel.findOne({ email });
        if (!user) {
            return res.status(401).json({ error: "User not found" });
        }
        const passwordMatch = await compare(password, user.password);
        if (!passwordMatch) {
            return res.status(401).json({ error: "Incorrect password" });
        }
        const token = jwt.sign(
            { email: user.email, _id: user._id },
            process.env.SECRET
        );
        res.json({
            token,
            user: { _id: user._id, name: user.name, email: user.email },
        });
    } catch (e) {
        console.error(e.message);
        res.status(500).json({ error: "Internal server error" });
    }
};

export default Login;
