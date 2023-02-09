const Response = require("../Model/surveyResponseModel");
const User = require("../Model/userModel");
const Survey = require("../Model/surveyModel");
const submitSurveyResponse = async (req, res) => {
  const responseObj = {
    userRef: req.user,
    surveyId: req.survey,
    response: req.body,
  };
  const user = User.findOne(req.user_id);
  console.log(req.user);
  res.json({ message: "received" });
  // try {
  //   await Response.create(responseObj);
  //   console.log("Response Successfully Submitted");
  //   res.json({ message: "Response Successfully Submitted" });
  // } catch (e) {
  //   console.log(e);
  //   res.json({ message: e.message });
  // }
};

module.exports = {
  submitSurveyResponse,
};
