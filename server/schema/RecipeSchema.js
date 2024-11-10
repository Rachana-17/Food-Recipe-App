import { Schema, model } from "mongoose";

const recipeSchema = new Schema({
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

const RecipeModel = model("Recipe", recipeSchema);

export { RecipeModel };
