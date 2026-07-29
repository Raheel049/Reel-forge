import projectModel from "../../models/project/projectModel.js";
import creditsModel from "../../models/subscription/credits.js";
import userSubscription from "../../models/subscription/userSubscription.js";

export const generateVideo = async (req, res) => {
  try {

    const { id } = req.params;

    const userId = req.user.id;

    // ======================
    // Find Project
    // ======================

    const project = await projectModel.findOne({
      _id: id,
      owner: userId,
    });

    if (!project) {
      return res.status(404).json({
        status: false,
        message: "Project not found",
      });
    }

    // ======================
    // Already Processing
    // ======================

    if (project.status === "processing") {
      return res.status(400).json({
        status: false,
        message: "Video generation already in progress",
      });
    }

    // ======================
    // Already Completed
    // ======================

    if (project.status === "completed") {
      return res.status(400).json({
        status: false,
        message: "Video already generated",
      });
    }

    // ======================
    // Subscription
    // ======================

    const subscription = await userSubscription.findOne({
      userId: userId,
      status: "active",
    });

    if (!subscription) {
      return res.status(403).json({
        status: false,
        message: "No active subscription",
      });
    }

    // ======================
    // Credits
    // ======================

    const credits = await creditsModel.findOne({
      userId: userId,
    });

    if (!credits || credits.remainingCredits < 10) {
      return res.status(400).json({
        status: false,
        message: "Not enough credits",
      });
    }

    // ======================
    // Processing
    // ======================

    project.status = "processing";

    await project.save();

    // ======================
    // AI Placeholder
    // ======================

    /*
        const aiResponse =
            await generateVideoFromAI(project.prompt);
    */

    // Fake Delay

    await new Promise(resolve =>
        setTimeout(resolve,3000)
    );

    // ======================
    // Dummy Video
    // ======================

    project.video = {
      url: "https://demo-video.mp4",
      publicId: "demo-video",
    };

    project.duration = 30;

    project.status = "completed";

    project.creditsUsed = 10;

    await project.save();

    // ======================
    // Deduct Credits
    // ======================

    credits.remainingCredits -= 10;

    credits.usedCredits += 10;

    await credits.save();

    // ======================

    return res.status(200).json({
      status: true,
      message: "Video generated successfully",
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