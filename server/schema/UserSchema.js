import { Schema, model } from "mongoose";

const UserSchema = new Schema({
    name: String,
    password: String,
    email: { type: String, lowercase: true },
});

const UserModel = model("User", UserSchema);

export {UserModel};