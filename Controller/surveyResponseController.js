const Response = require("../Model/surveyResponseModel");

const submitSurveyResponse = async (req, res) => {
  let response = req.body;
  try {
    await Response.create(response);
    console.log("Response Successfully Submitted");
    res.json({ message: "Response Successfully Submitted" });
  } catch (e) {
    console.log(e);
    res.json({ message: e.message });
  }
};

module.exports = {
  submitSurveyResponse,
};
