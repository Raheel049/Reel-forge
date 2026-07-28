import mongoose from "mongoose";

const projectSchema = new mongoose.Schema(
  {
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
      required: true,
    },

    title: {
      type: String,
      required: true,
      trim: true,
    },

    prompt: {
      type: String,
      required: true,
      trim: true,
    },

    description: {
      type: String,
      default: "",
    },

    thumbnail: {
      url: String,
      publicId: String,
    },

    video: {
      url: String,
      publicId: String,
    },

    duration: {
      type: Number,
      default: 0,
    },

    creditsUsed: {
      type: Number,
      default: 0,
    },

    status: {
      type: String,
      enum: [
        "draft",
        "processing",
        "completed",
        "failed",
      ],
      default: "draft",
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("project", projectSchema);