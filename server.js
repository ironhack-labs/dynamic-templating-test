require('dotenv').config();

const express = require('express');
const hbs = require('hbs');

const app = express();
const students = require('./exam-info.js');
const descendingScore = require('./exam-info.js')

app.set('view engine', 'hbs');
app.set('views', __dirname + '/views');

app.use(express.static('public'));

// 1: in the home,list all the students who took the exam (list all the students)

// ... Your code here

app.get(`/` , (req, res) => {
  res.render(__dirname + `/views/full-list.hbs`, {students});
});

// 2: in the '/results' list all the students who passed the test and their score.
// Also, students should be in descending order based on their score.

// ... Your code here
app.get(`/results`, (req, res) => {
  res.render(__dirname + `/views/results.hbs`, {descendingScore});
});

app.listen(process.env.PORT, () =>
  console.log(`new port ${process.env.PORT}.`)
);

