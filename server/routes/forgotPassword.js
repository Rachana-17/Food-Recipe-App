import { Router } from "express";
const router = Router();
import ForgotPassword from "../controllers/ForgotPasswordController.js";

router.put("/forgotpassword", ForgotPassword);

export default router;
