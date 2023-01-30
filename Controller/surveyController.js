const Survey = require("../Model/surveyModel");

const getAllSurveyData = async (req, res) => {
  try {
    let surveys = await Survey.find().sort({ dateCreated: -1 });
    res.send(surveys);
  } catch (e) {
    console.log(e);
    res.json({ message: e.message });
  }
};

const getSurveyById = async (req, res) => {
  const id = req.params.id;
  try {
    let survey = await Survey.findById(id);

    if (survey) {
      console.log(`Survey Found By ID: ${id}`);
      res.json(survey);
    } else {
      console.log("No Surveys Found");
      res.json({ message: "No Surveys Found" });
    }
  } catch (e) {
    console.log(e);
    res.json({ message: e.message });
  }
};

const submitSurvey = async (req, res) => {
  let survey = req.body;
  try {
    await Survey.create(survey);
    console.log("Survey Successfuly Created");
    res.json({ message: "Survey Successfuly Created" });
  } catch (e) {
    console.log(e);
    res.json({ message: e.message });
  }
};

const deleteSurvey = async (req, res) => {
  const id = req.params.id;
  try {
    const survey = await Survey.findOneAndDelete({ _id: id });
    if (survey) {
      console.log("Survey Deleted");
      res.json({ message: "Survey Deleted" });
    } else {
      console.log("Survey Not Found");
      res.json({ message: "Survey Not Found" });
    }
  } catch (e) {
    console.log(e);
    res.json({ message: e.message });
  }
};

const editSurvey = async (req, res) => {
  const id = req.params.id;
  const newSurvey = req.body;
  try {
    let survey = await Survey.findByIdAndUpdate({ _id: id }, newSurvey);
    if (survey) {
      console.log("Survey Sucessfully Updated");
      survey = await Survey.findById(id);
      res.json(survey);
    } else {
      console.log("Survey Not Found");
      res.json({ message: "Survey Not Found" });
    }
  } catch (e) {
    console.log(e);
    res.json({ message: e.message });
  }
};

module.exports = {
  getAllSurveyData,
  submitSurvey,
  getSurveyById,
  deleteSurvey,
  editSurvey,
};
