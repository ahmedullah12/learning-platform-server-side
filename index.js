const express = require('express');
const app = express();
const cors = require("cors");
app.use(cors());

const port = process.env.PORT || 5000;

const courses = require('./data/courses.json')

app.get('/', (req, res) => {
    res.send('Api running')
});

app.get('/courses', (req, res) => {
    res.send(courses);
})



app.listen(port, () => console.log('server running on ', port))