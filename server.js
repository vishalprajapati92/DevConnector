const express = require('express');
const mongoose = require('mongoose');
const connectDB = require('./routes/config/db');
const app = express();
connectDB();

var empSchema = mongoose.Schema({
    id: String,
    firstName: String,
    lastName: String
}, {collection: "empdata"});

var employeeData = mongoose.model('empdata', empSchema);
console.log("mydata", employeeData.find({}).then(res => console.log(res)));

app.get('/',(req,res) => res.send('API  Running'));

const PORT = process.env.PORT || 5050;

app.listen(PORT,()=>console.log(`Server started on port ${PORT}`));
