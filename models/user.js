import mongoose from "mongoose";

const schema = {
  fullName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  phone: {
    type: Number,
    required: true,
  },
  check: {
    type: Boolean,
    required: true,
    default: false,
  },
  refreshToken: {
    type: String,
    required: true,
  },
  roll: {
    type: String,
    required: true,
  },
};

const model = mongoose.models?.User || mongoose.model("User", schema);

export default model;
