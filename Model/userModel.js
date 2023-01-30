const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const user = new Schema(
  {
    firstName: {
      type: String,
      default: "",
    },
    lastName: {
      type: String,
      default: "",
    },

    password: {
      type: String,
      required: true,
    },

    email: {
      type: String,
      required: true,
    },
    surveyTaken: {
      type: Array,
      default: [],
    },
  },
  {
    collection: "users",
  }
);

const User = mongoose.model("user", user);
module.exports = User;