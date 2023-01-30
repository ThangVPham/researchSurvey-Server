const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const response = new Schema(
  {
    userRef: {
      type: String,
      required: true,
    },
    surveyId: {
      type: String,
      required: true,
    },
    response: [
      {
        type: Object,
        require: true,
      },
    ],
  },
  {
    collection: "responses",
  }
);

const Response = mongoose.model("response", response);
module.exports = Response;
