import cron from "node-cron"
import userSubscription from "../models/subscription/userSubscription.js"
import creditsModel from "../models/subscription/credits.js"

const subscriptionExpiryJob = () => {
    cron.schedule("0 0 * * *", async () => {
        try {

            creditsModel.findMany({remainingCredits: {$lts: 0}}).detete()

            const result = await userSubscription.updateMany({
                status: "active",
                endDate: {$lte: new Date()},
                set: {
                    status: "expired"
                }
            });

            console.log(`${result.modifiedCount} subscriptions expired.`)
        } catch (error) {
            console.log("Subscription Job Error", error)
        }
    })
}

export default subscriptionExpiryJob