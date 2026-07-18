import mongoose from "mongoose";

const userSubscriptionSchema = new mongoose.Schema(
    {
        userId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "user",
            required: true,
        },

        planId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "subscriptionPlan",
            required: true,
        },

        status: {
            type: String,
            enum: [
                "active",
                "expired",
                "cancelled",
                "pending"
            ],
            default: "active",
        },

        startDate: {
            type: Date,
            required: true,
        },

        endDate: {
            type: Date,
            required: true,
        },

        autoRenew: {
            type: Boolean,
            default: false,
        },

        paymentProvider: {
            type: String,
            enum: [
                "stripe",
                "paypal",
                "paddle",
                "lemonsqueezy",
                "manual",
                null
            ],
            default: null,
        },

        paymentId: {
            type: String,
            default: null,
        },
    },
    {
        timestamps: true,
    }
);

const userSubscription = mongoose.model(
    "userSubscription",
    userSubscriptionSchema
);

export default userSubscription;