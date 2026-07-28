import projectModel from "../../models/project/projectModel.js";


// ==============================
// Create Project
// ==============================

export const createProject = async (req, res) => {
  try {
    const { title, prompt, description } = req.body;

    const owner = req.user.id;

    if (!title || !prompt) {
      return res.status(400).json({
        status: false,
        message: "Title and Prompt are required.",
        data: null,
      });
    }

    const project = await projectModel.create({
      owner,
      title,
      prompt,
      description,
    });

    return res.status(201).json({
      status: true,
      message: "Project created successfully.",
      data: project,
    });
  } catch (error) {
    return res.status(500).json({
      status: false,
      message: error.message,
      data: null,
    });
  }
};



// ==============================
// Get All Projects
// ==============================

export const getProjects = async (req, res) => {
  try {
    const owner = req.user.id;

    const projects = await projectModel
      .find({ owner })
      .sort({ createdAt: -1 });

    return res.status(200).json({
      status: true,
      message: "Projects fetched successfully.",
      data: projects,
    });
  } catch (error) {
    return res.status(500).json({
      status: false,
      message: error.message,
      data: null,
    });
  }
};



// ==============================
// Get Single Project
// ==============================

export const getProjectById = async (req, res) => {
  try {
    const { id } = req.params;

    const owner = req.user.id;

    const project = await projectModel.findOne({
      _id: id,
      owner,
    });

    if (!project) {
      return res.status(404).json({
        status: false,
        message: "Project not found.",
        data: null,
      });
    }

    return res.status(200).json({
      status: true,
      message: "Project fetched successfully.",
      data: project,
    });
  } catch (error) {
    return res.status(500).json({
      status: false,
      message: error.message,
      data: null,
    });
  }
};



// ==============================
// Update Project
// ==============================

export const updateProject = async (req, res) => {
  try {
    const { id } = req.params;

    const owner = req.user.id;

    const { title, prompt, description } = req.body;

    const project = await projectModel.findOneAndUpdate(
      {
        _id: id,
        owner,
      },
      {
        title,
        prompt,
        description,
      },
      {
        returnDocument: "after",
        runValidators: true,
      }
    );

    if (!project) {
      return res.status(404).json({
        status: false,
        message: "Project not found.",
        data: null,
      });
    }

    return res.status(200).json({
      status: true,
      message: "Project updated successfully.",
      data: project,
    });
  } catch (error) {
    return res.status(500).json({
      status: false,
      message: error.message,
      data: null,
    });
  }
};



// ==============================
// Delete Project
// ==============================

export const deleteProject = async (req, res) => {
  try {
    const { id } = req.params;

    const owner = req.user.id;

    const project = await projectModel.findOneAndDelete({
      _id: id,
      owner,
    });

    if (!project) {
      return res.status(404).json({
        status: false,
        message: "Project not found.",
        data: null,
      });
    }

    return res.status(200).json({
      status: true,
      message: "Project deleted successfully.",
      data: null,
    });
  } catch (error) {
    return res.status(500).json({
      status: false,
      message: error.message,
      data: null,
    });
  }
};