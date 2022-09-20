const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const survey = new Schema(
  {
    surveyName: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: false,
    },
    status: {
      type: Boolean,
      default: true,
    },
    dateCreated: {
      type: Date,
      default: Date.now,
    },
    questions: [
      {
        questionType: String,
        question: String,
        options: {
          type: [String],
          default: null,
        },
        correctOption: {
          type: String,
          default: null,
        },
        imgURL: [String],
        imgDesc: [String],
      },
    ],
  },
  {
    collection: "surveys",
  }
);

const Survey = mongoose.model("survey", survey);
module.exports = Survey;
