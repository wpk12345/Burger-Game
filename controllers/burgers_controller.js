var express = require("express");
// Import the model (burger.js) to use its database functions.
var burger = require("../models/burger.js")

var router = express.Router();
//we don't need delete.  we are only showing all/updating burgers to "devoured"/and creating new ones which will populate on the right side with a button generated that says devour it.
// Create all our routes and set up logic within those routes where required.  Code that calls the ORM functions.
router.get("/", function(req, res) {
    burger.all(function(data) {
      var hbsObject = {
        burgers: data
      };
     console.log(hbsObject);
      res.render("index", hbsObject);
    });
  });
  
  //This will handle the creating new burger objects

  // router.post("/api/burgers", function(req, res) {
  //   burger.create("burger_name",req.body.burger_name, function(result) {
  //     // Send back the ID of the new quote
  //     res.json({ id: result.insertId });
  //   });
  // });
  
  // //This will handle updating the burgers moving them to the left after user clicks devour it.
  // router.put("/api/burgers/:id", function(req, res) {
  //   var condition = "id = " + req.params.id;
  
  //  console.log("condition", condition);
  
  //   burger.update({
  //     devoured: req.body.devoured
  //   }, condition, function(result) {
  //     if (result.changedRows == 0) {
  //       // If no rows were changed, then the ID must not exist, so 404
  //       return res.status(404).end();
  //     } else {
  //       res.status(200).end();
  //     }
  //   });
  // });
  
  // Export routes for server.js to use.
  module.exports = router;
  