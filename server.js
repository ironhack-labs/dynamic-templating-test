require('dotenv').config();

const express = require('express');
const hbs = require('hbs');
let students = require('./exam-info.js')
let sortedStudents = require('./exam-info.js')
const app = express();

app.set('view engine', 'hbs');
app.set('views', __dirname + '/views');

app.use(express.static('public'));
//****** */

app.use(express.static('views'))








// 1: in the home,list all the students who took the exam (list all the students)

// ... Your code here
app.get('/', function (req, res) {
  res.render(__dirname + '/views/full-list.hbs', {students})
})

app.get('/results', function (req, res) {
  res.render(__dirname + '/views/results.hbs', {sortedStudents})
})

// 2: in the '/results' list all the students who passed the test and their score.
// Also, students should be in descending order based on their score.

// ... Your code here

app.listen(process.env.PORT, () =>
  console.log(`App running on ${process.env.PORT}.`)
);
