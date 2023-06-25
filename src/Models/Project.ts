import mongoose from "mongoose";

const projectSchema = new mongoose.Schema(
  {
    image: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
      required: true,
    },
    skills: {
      type: [String],
      required: true,
    },
    github: {
      type: String,
    },
    link: {
      type: String,
    },
    colab: {
      type: String,
    },
    personal: {
      type: Boolean,
      required: true,
      default: false,
    },
    authorId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
);

export default mongoose?.models?.Project ||
  mongoose.model("Project", projectSchema);
