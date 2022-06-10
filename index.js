var mongoose = require('mongoose');
var express = require('express');
var bodyParser = require('body-parser');
var route = require('./route');

mongoose.connect("mongodb+srv://devang:devang7492@cluster0.hchkg.mongodb.net/Student?retryWrites=true&w=majority").then(()=>{
console.log("conncted");
app = express();
app.use(express.json());
app.use(bodyParser.urlencoded({extended:false}))
app.use('/api',route)

app.listen(3004,()=>{
    console.log("Server Running")
})
}).catch((err)=>{
    console.log(err);
})