var express = require('express');
var app = express();
const PORT = process.env.PORT || 5050
const bodyParser = require('body-parser')
const { student,addStudData, studViewById, studDeleteById, studUpdateById } = require('./src/controller/stud.ctrl')
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.get('/stud', student);
app.post('/add',addStudData);
app.get('/view/:id',studViewById);
app.delete('/delete/:id',studDeleteById)
app.put("/update/:id",studUpdateById)

app.listen(PORT, function () {
console.log(`project is running on ${PORT}`); });