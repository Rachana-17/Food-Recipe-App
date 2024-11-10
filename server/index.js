import express, { Router, json } from "express";
const app = express();
import cors from "cors";
import { config } from "dotenv";
import { connect } from "mongoose";

config();
const router = Router();

app.use(json());
app.use(cors());

const flag = connect(process.env.URI)
    .then(() => {
        console.log("Connected to the database");
    })
    .catch((error) => {
        console.error("Error connecting to the database:", error);
    });

import { Home as _Home } from "./controllers/controller.js";
import LoginRoute from "./routes/LoginRoute.js";
import RegisterRoute from "./routes/RegisterRoute.js";
import verifyToken from "./Middleware/middleware.js";
import RecipeRoute from "./routes/RecipeRoute.js";
import ForgotPassword from "./routes/forgotPassword.js";

app.use("/auth", LoginRoute);
app.use("/auth", RegisterRoute);
app.use("/auth", RecipeRoute);
app.use("/auth", router);
app.use("/auth", ForgotPassword);

router.get("/", verifyToken, _Home);

export default router;

if (flag) {
    app.listen(process.env.PORT, () => {
        console.log(`Server Started on port ${process.env.PORT}`);
    });
}
