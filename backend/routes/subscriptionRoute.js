import express from "express"
import { getPlans } from "../controllers/subscription/getPlans.js"
import { addPlan } from "../controllers/subscription/addPlan.js";
import { authMiddleware } from "../middleware/middleware.js";
import { subscribePlan } from "../controllers/subscription/subscribePlan.js";
import { currentPlan } from "../controllers/subscription/currentPlan.js";

const subscriptionRoute = express.Router()

subscriptionRoute.post("/get-plans",authMiddleware, getPlans);

subscriptionRoute.post("/add-plan", authMiddleware, addPlan);

subscriptionRoute.post("/subscribe-plan",authMiddleware, subscribePlan);

subscriptionRoute.get("/current-plan",authMiddleware, currentPlan);

export default subscriptionRoute