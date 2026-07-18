import cron from "node-cron"
import userSubscription from "../models/subscription/userSubscription.js"

const subscriptionExpiryJob = () => {
    cron.schedule("0 0 * * *", async () => {
        try {
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