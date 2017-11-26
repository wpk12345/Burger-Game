var express = require("express");
var methodOverride = require("method-override");
var bodyParser = require ("body-parser");

//create an instance of the express app
var app = express();

//specify the port
var port = process.env.PORT || 3000;


