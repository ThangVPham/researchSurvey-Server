const express = require("express");
const router = express.Router();
const surveyController = require("../Controller/surveyController");

router.get("/", surveyController.getAllSurveyData);
router.get("/:id", surveyController.getSurveyById);
router.post("/newsurvey", surveyController.submitSurvey);

module.exports = router;
