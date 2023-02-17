const express = require("express");
const router = express.Router();
const surveyController = require("../Controller/surveyController");
const { authenticate, verifyAccess } = require("../auth/authMiddleware");

router.post(
  "/verifyaccess",
  authenticate,
  verifyAccess,
  surveyController.getSurveyById
);
router.get("/", authenticate, surveyController.getAllSurveyData);
router.get("/:id", authenticate, surveyController.getSurveyById);
router.get(
  "/surveydetail/:id",
  authenticate,
  surveyController.surveyDetailById
);
router.put("/:id", authenticate, surveyController.editSurvey);
router.delete("/:id", authenticate, surveyController.deleteSurvey);
router.post("/newsurvey", authenticate, surveyController.submitSurvey);

module.exports = router;
