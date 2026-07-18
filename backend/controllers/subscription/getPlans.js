import subscriptionPlan from "../../models/subscription/subscriptionPlan.js";

export const getPlans = async (req, res) => {
    try {
        

        const plans = await subscriptionPlan.find({isActive: true}).sort({price: 1})

        res.status(200).json({
            message : "Data found",
            status: true,
            data: plans
        })
        
    } catch (error) {
        return res.status(500).json({
            message : error.message || "Internal server error",
            status: false,
            data: null
        })
    }
}

