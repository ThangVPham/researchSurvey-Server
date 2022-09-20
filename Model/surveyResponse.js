const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const surveyResponse = new Schema(
  {
    surveyId: String,
    surveyName: String,
    userId: String,
    response: [String],
    time: [Number],
  },
  {
    collection: "surveyResponses",
  }
);

const SurveyResponse = mongoose.model("surveyResponse", surveyResponse);
module.exports = SurveyResponse;
