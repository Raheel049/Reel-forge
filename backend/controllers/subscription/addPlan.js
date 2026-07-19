import userModel from "../../models/auth/auth.js"
import subscriptionPlan from "../../models/subscription/subscriptionPlan.js"

export const addPlan = async (req, res) => {
    try {
        const userId = req.user.id
        console.log(userId)

        const checkAdmin = await userModel.findById(userId)

        if(!checkAdmin){
            return res.status(404).json({
                message : "User not found",
                status: false,
                data: null
            })
        }

        if(checkAdmin.role === "User"){
            return res.status(401).json({
                message : "You are not admin",
                status: false,
                data: null
            })
        }

        const { planName, description, price, currency, durationInDays, credits } = req.body

        if(!planName || !description || price === undefined || !currency || !durationInDays || !credits){
            return res.status(400).json({
                message : "Required fields are missing",
                status: false,
                data: null
            })
        }

        const subObj = {
            planName,
            description,
            price,
            currency,
            durationInDays,
            credits
        }

        await subscriptionPlan.create(subObj)

        res.status(200).json({
            message : "Plane created successFul",
            status: true,
            data: subObj
        })
        
     } catch (error) {
        return res.status(500).json({
            message : error.message || "Internal server error",
            status: false,
            data: null
        })
    }
}