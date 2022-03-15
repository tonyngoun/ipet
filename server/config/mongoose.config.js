const mongoose = require ("mongoose");

const dbName= "iPet";

mongoose.connect("mongodb://localhost/" + dbName,{
    useNewUrlParser: true,
    useunifiedTopology: true
})
    .then(()=>{
        console.log("You are connected to the database called " + dbName)
    })
    .catch((err)=>{
        console.log("Error connecting to the database called: " + dbName);
        console.log(err);
    })
