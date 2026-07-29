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

    let {
      page = 1,
      limit = 10,
      search = "",
      status,
      sort = "newest",
    } = req.query;

    page = Number(page);
    limit = Number(limit);

    const filter = {
      owner,
    };

    // ========================
    // Search
    // ========================

    if (search) {
      filter.$or = [
        {
          title: {
            $regex: search,
            $options: "i",
          },
        },
        {
          prompt: {
            $regex: search,
            $options: "i",
          },
        },
      ];
    }

    // ========================
    // Status Filter
    // ========================

    if (status) {
      filter.status = status;
    }

    // ========================
    // Sorting
    // ========================

    let sortOption = {};

    switch (sort) {

      case "oldest":
        sortOption = {
          createdAt: 1,
        };
        break;

      case "title":
        sortOption = {
          title: 1,
        };
        break;

      case "status":
        sortOption = {
          status: 1,
        };
        break;

      default:
        sortOption = {
          createdAt: -1,
        };
    }

    const totalProjects = await projectModel.countDocuments(filter);

    const projects = await projectModel
      .find(filter)
      .sort(sortOption)
      .skip((page - 1) * limit)
      .limit(limit);

    return res.status(200).json({

      status: true,

      message: "Projects fetched successfully.",

      data: projects,

      pagination: {

        totalProjects,

        currentPage: page,

        totalPages: Math.ceil(totalProjects / limit),

        limit,

        hasNextPage:
          page < Math.ceil(totalProjects / limit),

        hasPrevPage:
          page > 1,
      },
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