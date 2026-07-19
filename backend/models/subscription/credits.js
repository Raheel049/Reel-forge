import mongoose from "mongoose"

const creditSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
        required: true,
        unique: true
    },

    totalCredits: {
        type: Number,
        default: 10
    } ,

    remainingCredits: {
        type: Number,
        default: 10
    },

    usedCredits: {
        type: Number,
        default: 0
    }

},{timestamps: true})

const creditsModel = mongoose.model("credits", creditSchema);

export default creditsModel