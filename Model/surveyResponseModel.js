const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const response = new Schema(
  {
    userRef: {
      type: Schema.Types.ObjectId,
      ref: "user",
      required: true,
    },
    surveyId: {
      type: Schema.Types.ObjectId,
      ref: "survey",
      required: true,
    },
    response: {
      type: Object,
      require: true,
    },
  },
  {
    collection: "responses",
  }
);

const Response = mongoose.model("response", response);
module.exports = Response;
