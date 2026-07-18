import subscriptionPlan from "../../models/subscription/subscriptionPlan.js";
import userSubscription from "../../models/subscription/userSubscription.js";

export const subscribePlanService = async ({ userId, planId }) => {

    if (!planId) {
        return {
            statusCode: 400,
            status: false,
            message: "Plan ID is required",
            data: null
        };
    }

    // Check Plan
    const plan = await subscriptionPlan.findById(planId);

    if (!plan) {
        return {
            statusCode: 404,
            status: false,
            message: "Subscription plan not found",
            data: null
        };
    }

    // Check Active Subscription
    const activeSubscription = await userSubscription
        .findOne({
            userId,
            status: "active"
        }).populate("planId");

    if (activeSubscription) {

        // Same Plan
        if (
            activeSubscription.planId._id.toString() ===
            planId.toString()
        ) {
            return {
                statusCode: 409,
                status: false,
                message: "You are already subscribed to this plan.",
                data: activeSubscription
            };
        }

        // Cancel Old Subscription
        activeSubscription.status = "cancelled";
        activeSubscription.endDate = new Date();

        await activeSubscription.save();
    }

    // Calculate Dates
    const startDate = new Date();

    const endDate = new Date();

    endDate.setDate(
        endDate.getDate() + plan.durationInDays
    );

    // Create New Subscription
    const newSubscription = await userSubscription.create({
        userId,
        planId: plan._id,
        status: "active",
        startDate,
        endDate,
        autoRenew: false,
        paymentProvider: null,
        paymentId: null
    });

    return {
        statusCode: 201,
        status: true,
        message: "Subscription activated successfully.",
        data: newSubscription
    };
};

