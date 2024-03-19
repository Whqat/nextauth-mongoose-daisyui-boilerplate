import mongoose from "mongoose";

// user schema with name, email, and image
const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
});

// post schema
const PostSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        maxlength: 50,
        minlength: 8,
    },
    content: {
        type: String,
        required: true,
        minlength: 24,
        maxlength: 1200,
    },
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    thumbnail: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    }
});

// export models
export const User = mongoose.models.User || mongoose.model("User", UserSchema);
export const Post = mongoose.models.Post || mongoose.model("Post", PostSchema)
