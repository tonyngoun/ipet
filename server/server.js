// require("dotenv").config();
const express = require("express");
const cors =  require ("cors");
// const cookieParser = require("cookie-parser");
const app = express();


//lets us read a payload consisting of JSON object
app.use(express.json());
//lets us read a payload consisting of strings and arrays
app.use(express.urlencoded({extended:true}));

app.use(
    cors({
        //added line 16 for register/login form
        // credentials: true, //this line is added to give the ability to use credentials with cookies
        origin: "http://localhost:3000",
}),
);

//to configure the server to accept and update cookies register/login form
// app.use(cookieParser());

require("./config/mongoose.config");
// adding routes to listen
// require("./routes/user.routes")(app); //added for register/login form
require("./routes/pet.routes")(app);


app.listen(8000, () => console.log("Firing on port 8000"));