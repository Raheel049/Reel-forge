import userSubscription from "../../models/subscription/userSubscription.js"

export const currentPlan = async (req, res) => {
    try {
        const userId = req.user.id

        const userCurrentPlan = await userSubscription.findOne({
            userId,
            status: "active"
        }) 

        if(!userCurrentPlan){
            return res.status(404).json({
                message : "You have not subscribed any plan",
                status: false,
                data: null
            })
        }

        res.status(200).json({
            message : "User plan found successfully!",
            status: true,
            data: userCurrentPlan
        })

    } catch (error) {
        return res.status(500).json({
            message : error.message || "Internal server error",
            status: false,
            data: null
        })
    }
}