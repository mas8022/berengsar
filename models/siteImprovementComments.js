import mongoose, { Schema } from "mongoose";

const schema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    comment: {
      type: String,
      required: true,
    },
    publish: {
      type: Boolean,
      required: true,
      index: true,
    },
  },
  {
    timestamps: true,
  }
);

const model =
  mongoose.models?.SiteImprovementComment ||
  mongoose.model("SiteImprovementComment", schema);

export default model;
