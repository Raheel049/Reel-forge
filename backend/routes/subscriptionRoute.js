import express from "express"
import { getPlans } from "../controllers/subscription/getPlans.js"
import { addPlan } from "../controllers/subscription/addPlan.js";
import { authMiddleware } from "../middleware/middleware.js";

const subscriptionRoute = express.Router()

subscriptionRoute.post("/get-plans",authMiddleware, getPlans);

subscriptionRoute.post("/add-plan", authMiddleware, addPlan);

export default subscriptionRoute