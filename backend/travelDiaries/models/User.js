import mongoose, { model, Schema } from "mongoose";

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    minLength: 6,
  },
  is_active: {
    type: Boolean,
    required: true,
  },
  posts: [{ type: mongoose.Types.ObjectId, ref: "Post" }],
});

export default model("User", userSchema);
// users
