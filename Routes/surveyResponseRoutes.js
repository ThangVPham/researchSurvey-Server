const express = require("express");
const router = express.Router();
const responseController = require("../Controller/surveyResponseController");

router.post("/", responseController.submitSurveyResponse);

module.exports = router;
