import { Schema, model } from "mongoose";

const LikedRecipes = new Schema({
    title: {
        type: String,
        required: true,
    },
    ingredients: [String],
    instructions: {
        type: String,
        required: true,
    },
    imageUrl: String,
});

const LikedModel = model("LikedRecipe", LikedRecipes);

export {LikedModel};
