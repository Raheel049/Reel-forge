import { subscribePlanService } from "../../services/subscription/subscriptionServices.js";

export const subscribePlan = async (req, res) => {
    try {

        const result = await subscribePlanService({
            userId: req.user.id,
            planId: req.body.planId
        });

        return res.status(result.statusCode).json({
            message: result.message,
            status: result.status,
            data: result.data
        });

    } catch (error) {

        return res.status(500).json({
            message: error.message || "Internal server error",
            status: false,
            data: null
        });

    }
};