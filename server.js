require("dotenv").config();

const express = require("express");
const hbs = require("hbs");
const students = require("./exam-info");

const app = express();

app.set("view engine", "hbs");
app.set("views", __dirname + "/views");

app.use(express.static("public"));

// 1: in the home,list all the students who took the exam (list all the students)

app.get("/", (request, response) => {
  response.render("full-list.hbs", { students });
});

// 2: in the '/results' list all the students who passed the test and their score.
// Also, students should be in descending order based on their score.

app.get("/results", (request, response) => {
  const filteredStudents = students
    .filter((student) => student.hasPassed)
    .sort((a, b) => b.score - a.score);
  response.render("results.hbs", { filteredStudents });
});

app.listen(process.env.PORT, () =>
  console.log(`App running on ${process.env.PORT}.`)
);
