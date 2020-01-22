

module.exports = function (app) {
    
    //Example for importing model.
    /* let userModel = require("../models/model");
    let User = userModel; */
   
    app.get("/", function (req, res) {
        res.send("Hello from server")
    });

    //Get all users (Admin).
    app.get("/users", function(req, res){
       // Do stuff here 
    });

    //Create new user.
    app.post("/register", function (req, res) {
       // Do stuff here 
    });

    //Check if user exsist in database.
    app.post("/login", function (req, res) {
       // Do stuff here 
    });

    //Get user data by id.
    app.post("/user/id", function (req, res, data) {
      // Do stuff here 
    });

    //Update existing user data.
    app.post("/user/update/id", function (req, res) {
       // Do stuff here 
    });

    // Delete a existing user object with it's id. 
    app.delete("/user/delete/id", function (req, res) {
       // Do stuff here 
    });
}