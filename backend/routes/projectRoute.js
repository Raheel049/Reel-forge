import express from "express";
import { authMiddleware } from "../middleware/middleware.js";
import { createProject, getProjects,
       getProjectById,
       updateProject,
       deleteProject, } from "../controllers/project/projectController.js";

const projectRoute = express.Router();

projectRoute.post("/create-project", authMiddleware, createProject);

projectRoute.get("/all-project", authMiddleware, getProjects);

projectRoute.get("/get-project/:id", authMiddleware, getProjectById);

projectRoute.put("/update-project/:id", authMiddleware, updateProject);

projectRoute.delete("/delete-project/:id", authMiddleware, deleteProject);

export default projectRoute;