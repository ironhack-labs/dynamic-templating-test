require('dotenv').config();

const express = require('express');
const hbs = require('hbs');
const students = require('./exam-info');

const app = express();

app.set('view engine', 'hbs');
app.set('views', __dirname + '/views');

app.use(express.static('public'));

// 1: in the home,list all the students who took the exam (list all the students)
app.get('/home', function (req, res){
  res.render(__dirname + '/views/full-list.hbs', {students})
})


// 2: in the '/results' list all the students who passed the test and their score.
// Also, students should be in descending order based on their score.

app.get('/results', function (req, res) {
  const newArray = students.filter(student => student.hasPassed == true).sort((student1, student2) => student2.score - student1.score)
  res.render(__dirname + '/views/results.hbs', {students: newArray})
})

app.listen(process.env.PORT, () =>
  console.log(`App running on ${process.env.PORT}.`)
);
