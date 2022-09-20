const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const user = new Schema({
  userName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  surveyTakenId: [String],
});
