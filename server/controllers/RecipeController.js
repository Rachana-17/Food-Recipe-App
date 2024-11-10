import { RecipeModel } from "../Schema/RecipeSchema.js";
import { LikedModel } from "../Schema/LikedRecipeSchema.js";
import mongoose from "mongoose";

const createRecipe = async (req, res) => {
    try {
        const { title, ingredients, instructions, imageUrl } = req.body;
        const newRecipe = await RecipeModel.create({
            title,
            ingredients,
            instructions,
            imageUrl,
        });
        res.status(201).json(newRecipe);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal server error" });
    }
};

const getAllRecipes = async (req, res) => {
    try {
        const allRecipes = await RecipeModel.find();
        res.status(200).json(allRecipes);
    } catch (error) {
        res.status(500).json({ error: "Internal server error" });
    }
};

const deleteRecipe = async (req, res) => {
    try {
        const recipeId = req.params.id;
        const deletedRecipe = await RecipeModel.deleteOne({ _id: recipeId });
        if (!deletedRecipe.deletedCount) {
            return res.status(404).json({ error: "Recipe not found" });
        }
        const recipes = await LikedModel.find();
        res.status(200).json({
            message: "Recipe deleted successfully",
            recipes,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal server error" });
    }
};

const LikedList = async (req, res) => {
    try {
        let recipes = await RecipeModel.find();
        let recipe = recipes.filter((recipe)=>recipe._id==req.params.id)[0];
        const existingFavorite = await LikedModel.findOne({
            title: recipe.title,
        });
        if (existingFavorite) {
            return res
                .status(400)
                .json({ error: "Recipe already exists in your favorites" });
        } else {
            const { title, instructions, imageUrl, ingredients } = recipe;
            const newFavorite = await LikedModel.create({
                title,
                instructions,
                imageUrl,
                ingredients,
            });
            return res.status(201).json({ favoriteRecipe: newFavorite });
        }
    } catch (error) {
        console.error("Error in Liked:", error);
        return res
            .status(500)
            .json({ error: "An internal server error occurred" });
    }
};

const getAllLikedRecipes = async (req, res) => {
    try {
        const allLikedRecipes = await LikedModel.find();
        res.status(200).json(allLikedRecipes);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal server error" });
    }
};

const removeFromLikedRecipes = async (req, res) => {
    try {
        const recipeId = req.params.id;
        const deletedLikedRecipe = await LikedModel.deleteOne({
            _id: recipeId,
        });
        if (!deletedLikedRecipe.deletedCount) {
            return res.status(404).json({ error: "Liked recipe not found" });
        }
        res.status(200).json({ message: "Recipe removed from liked recipes" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal server error" });
    }
};

const searchRecipes = async (req, res) => {
    const searchKey = req.params.key;
    try {
        const recipes = await find({
            title: { $regex: new RegExp(searchKey, "i") },
        });
        if (recipes.length === 0) {
            return res.status(404).json({ message: "No recipes found" });
        }
        res.status(200).json(recipes);
    } catch (error) {
        console.error("Error searching recipes:", error);
        res.status(500).json({ error: "Internal server error" });
    }
};

export {
    getAllRecipes,
    createRecipe,
    deleteRecipe,
    getAllLikedRecipes,
    LikedList,
    removeFromLikedRecipes,
    searchRecipes,
};
