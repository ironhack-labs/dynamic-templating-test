require('dotenv').config();

const express = require('express');
const hbs = require('hbs');
// added iteration 1
const students = require("./exam-info")
// it 2


const app = express();

app.set('view engine', 'hbs');
app.set('views', __dirname + '/views');

app.use(express.static('public'));

// 1: in the home,list all the students who took the exam (list all the students)

// ... Your code here
app.get('/',(req, res)=>{
  res.render("full-list.hbs", { students })
});

app.get('/results', (req,res) => {
const filteredStudents = students.filter(s => s.hasPassed).sort((a,b)=> b.score - a.score)
  //const sortOrder = 
  res.render("results.hbs", { filteredStudents })
})

// 2: in the '/results' list all the students who passed the test and their score.
// Also, students should be in descending order based on their score.

// ... Your code here

app.listen(process.env.PORT, () =>
  console.log(`App running on ${process.env.PORT}.`)
);

