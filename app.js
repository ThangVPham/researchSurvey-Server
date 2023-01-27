require("dotenv").config();
const express = require("express");
const surveyRoutes = require("./Routes/surveyRoutes");
const userResponseRoutes = require("./Routes/userResponseRoutes");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const PORT = 5000;

app.use(express.static("assets"));

mongoose
  .connect(process.env.DB_URI)
  .then((result) => {
    console.log("Remote Database Connected");

    app.listen(process.env.PORT || PORT, () => {
      console.log(`Server is listening on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });

app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Hello World");
});

const MAIN_SURVEY_ID = "6324d547c2e9d1cde20183d0";

app.use("/api/surveys", surveyRoutes);
app.use("/api/userresponse", userResponseRoutes);
