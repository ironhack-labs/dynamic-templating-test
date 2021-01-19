require('dotenv').config();

const express = require('express');
const app = express();
// const studentList = require("./exam-info.js");

// const hbs = require('hbs');

app.set('views', __dirname + '/views');
app.set('view engine', 'hbs');

app.use(express.static('public'));

const students = [
  {
    name: 'ana',
    score: 7.4,
    hasPassed: true
  },
  {
    name: 'ivan',
    score: 4.5,
    hasPassed: false
  },
  {
    name: 'milo',
    score: 9.3,
    hasPassed: true
  },
  {
    name: 'igor',
    score: 7.0,
    hasPassed: true
  },
  {
    name: 'george',
    score: 8.9,
    hasPassed: true
  },
  {
    name: 'jess',
    score: 10.0,
    hasPassed: true
  },
  {
    name: 'kevin',
    score: 5.8,
    hasPassed: false
  },
  {
    name: 'beth',
    score: 7.1,
    hasPassed: true
  }
];
const studentsSorted = [...students].sort((a, b) => b.score - a.score);

// 1: in the home,list all the students who took the exam (list all the students)
app.get("/full-list.hbs", (request, response, next) => {
  response.render("full-list.hbs", {students: students});
});

// 2: in the '/results' list all the students who passed the test and their score.
// Also, students should be in descending order based on their score.
app.get("/results.hbs", (request, response, next) => {
  response.render("results.hbs", {studentsSorted: studentsSorted});
});


app.listen(process.env.PORT, () =>
  console.log(`App running on ${process.env.PORT}.`)
);
