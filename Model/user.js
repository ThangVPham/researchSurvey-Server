const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const user = new Schema(
  {
    userName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    surveyTaken: [
      {
        surveyId: {
          type: String,
          default: "63249273c87082cdf42db0c3",
        },
        surveyName: String,
        response: [Object],
      },
    ],
  },
  {
    collection: "users",
  }
);

const User = mongoose.model("user", user);
module.exports = User;
