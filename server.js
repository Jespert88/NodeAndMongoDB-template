const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const morgan = require("morgan");
const connectDB = "mongodb+srv://user:password@nameofyourcluster-err4x.mongodb.net/databasename?retryWrites=true&w=majority"; //mongoDB connection string.
const port = process.env.PORT || 3000;

//Initiate our app
const app = express();

//Configure app and allowing cors and body parser. 
app.use(cors());
app.use(morgan);
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "public")));

//Configure Mongoose
mongoose.connect(connectDB, {useNewUrlParser: true}, { useUnifiedTopology: true }, () => {
    console.log("Connected to database");
});
mongoose.set("debug", true);

//Models & routes
require("./models/model");
app.use(require('./routes'));

// Listen to process environment port (ex: heroku port) or port 3000.
app.listen(port, () => console.log("Listening to port:", port));