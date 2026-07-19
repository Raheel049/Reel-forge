import subscriptionPlan from "../../models/subscription/subscriptionPlan.js";
import userSubscription from "../../models/subscription/userSubscription.js";
import creditsModel from "../../models/subscription/credits.js";

// ============================
// Create Free Subscription
// ============================

export const createFreeSubscription = async (userId) => {

    const freePlan = await subscriptionPlan.findOne({
        planName: "FREE",
        isActive: true
    });

    if (!freePlan) {
        throw new Error("Free plan not found.");
    }

    const startDate = new Date();

    const endDate = new Date();

    endDate.setDate(
        endDate.getDate() + freePlan.durationInDays
    );

    await userSubscription.create({
        userId,
        planId: freePlan._id,
        status: "active",
        startDate,
        endDate,
        autoRenew: false
    });

    await creditsModel.create({
        userId,
        totalCredits: freePlan.credits,
        usedCredits: 0,
        remainingCredits: freePlan.credits
    });

};

// ============================
// Subscribe To New Plan
// ============================

export const subscribeToPlan = async (userId, planId) => {

    // Find Selected Plan
    const plan = await subscriptionPlan.findById(planId);

    if (!plan) {
        throw new Error("Subscription plan not found.");
    }

    // Find Current Active Subscription
    const activeSubscription = await userSubscription.findOne({
        userId,
        status: "active"
    });

    // If User Already Has Active Subscription
    if (activeSubscription) {

        // Same Plan Check
        if (activeSubscription.planId.toString() === planId.toString()) {
            throw new Error("You are already subscribed to this plan.");
        }

        // Expire Old Subscription
        activeSubscription.status = "expired";
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
        autoRenew: false
    });

    // Update User Credits
    await userCredit.findOneAndUpdate(
        { userId },
        {
            totalCredits: plan.credits,
            usedCredits: 0,
            remainingCredits: plan.credits
        },
        {
            new: true
        }
    );

    return newSubscription;
};