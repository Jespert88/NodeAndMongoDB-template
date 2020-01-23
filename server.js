const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const morgan = require("morgan");
const connectDB = "mongodb+srv://user:password@clusternamehere-err4x.mongodb.net/databasenamehere?retryWrites=true&w=majority"; //mongoDB connection string.
const routes = require("./routes/routes");
const port = process.env.PORT || 3000;

//Initiate our app
const app = express();

//Configure app.
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, "public")));
app.use(morgan('tiny', "default"));

//Allowing CORS and setting body parser.
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//Configure Mongoose
mongoose.connect(connectDB, {useNewUrlParser: true}, { useUnifiedTopology: true }, () => {
    console.log("Connected to database");
});
mongoose.set("debug", true);

//Tells the app to use routes from the router obj.
routes(app);

// Listen to process environment port (ex: heroku port) or port 3000.
app.listen(port, () => console.log("Listening to port:", port));