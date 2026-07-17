import mongoose from "mongoose";

const subscriptionPlanSchema = new mongoose.Schema(
    {
        planName: {
            type: String,
            required: true,
            unique: true,
            trim: true,
        },

        description: {
            type: String,
            default: "",
            trim: true,
        },

        price: {
            type: Number,
            required: true,
            min: 0,
        },

        currency: {
            type: String,
            default: "USD",
            uppercase: true,
        },

        durationInDays: {
            type: Number,
            required: true,
        },

        features: [
            {
                type: String,
                trim: true,
            },
        ],

        isActive: {
            type: Boolean,
            default: true,
        },
    },
    {
        timestamps: true,
    }
);

const subscriptionPlan = mongoose.model(
    "subscriptionPlan",
    subscriptionPlanSchema
);

export default subscriptionPlan;