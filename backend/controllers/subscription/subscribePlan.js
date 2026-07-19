import { subscribeToPlan } from "../../services/subscription/subscriptionServices.js";

export const subscribePlan = async (req, res) => {
    try {

        const { planId } = req.body;
        const userId = req.user.id;

        const subscription = await subscribeToPlan(userId, planId);

        return res.status(200).json({
            message: "Plan subscribed successfully.",
            status: true,
            data: subscription
        });

    } catch (error) {

        return res.status(500).json({
            message: error.message,
            status: false,
            data: null
        });

    }
};