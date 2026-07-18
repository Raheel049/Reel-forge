import cron from "node-cron";
import otpModel from "../models/auth/otpSchema.js";

const otpExpiryJob = () => {

    // Runs every 10 minutes
    cron.schedule("*/10 * * * *", async () => {

        try {

            console.log("Running OTP Expiry Job...");

            const result = await otpModel.deleteMany({
                expiresAt: {
                    $lte: new Date()
                }
            });

            console.log(
                `OTP Expiry Job Completed | Deleted: ${result.deletedCount} OTP(s)`
            );

        } catch (error) {

            console.error("OTP Expiry Job Failed:", error.message);

        }

    });

};

export default otpExpiryJob;