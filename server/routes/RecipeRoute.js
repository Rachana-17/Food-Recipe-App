import { Router } from "express";
const router = Router();
import verifyToken from "../Middleware/middleware.js";
import {
    getAllRecipes, createRecipe, deleteRecipe, LikedList, getAllLikedRecipes, removeFromLikedRecipes, searchRecipes,
} from "../controllers/RecipeController.js";

router.post("/recipe", createRecipe);
router.get("/recipe", verifyToken, getAllRecipes);
router.get("/likedRecipes", getAllLikedRecipes);
router.delete("/recipe/:id", deleteRecipe);
router.post("/likedRecipes/:id", LikedList);
router.delete("/removeLiked/:id", removeFromLikedRecipes);
router.get("/searchRecipes/:key", searchRecipes);

export default router;
