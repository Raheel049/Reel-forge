import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    name: {
        type : String,
        required : true
    },

    phoneNumber: {
        type: Number,
        default: null
    },
    email: {
        type: String,
        required: true
        
    },
    password: {
        type: String,
        default: null
    },
    isVerified: {
        type: Boolean,
        default: false
    },

    provider: {
        type: String,
        enum: ["local", "google", "github"],
        default: "local",
    },

    googleId: {
        type: String,
        default: null,
    },

    githubId: {
        type: String,
        default: null,
    },

    avatar: {
        type: String,
        default: "",
    },
}, {timestamps: true})

const userModel = mongoose.model("user",userSchema)

export default userModel