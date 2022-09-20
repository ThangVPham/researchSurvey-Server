const Survey = require("../Model/survey");

const getAllSurveyData = async (req, res) => {
  let surveys = await Survey.find().sort({ dateCreated: -1 });
  res.send(surveys);
};

const getSurveyById = async (req, res) => {
  const id = req.params.id;
  let survey = await Survey.findById(id);
  res.send(survey);
};

const submitSurvey = async (req, res) => {
  let survey = req.body;

  await Survey.create(survey, (err) => {
    if (err) {
      console.log(err);
      res.send("Fail");
    }
    res.send("Success");
  });
};
module.exports = {
  getAllSurveyData,
  submitSurvey,
  getSurveyById,
};
