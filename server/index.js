//npm install --save express
const express = require("express");
const app = express();
const path = require("path");
//here
const { db } = require("./db");

//listen for requests
//useful if you deploy on Heroku
const port = process.env.PORT || 3000;

db.sync().then(() => {
  console.log("db synced");
  app.listen(port, function () {
    console.log(`Your server is listening on port ${port}`);
  });
});

//to here

//npm install --save morgan
//server logs will help with debugging
const morgan = require("morgan");
app.use(morgan("dev"));

//serves up static assets from public folder
app.use(express.static(path.join(__dirname, "../public")));

//npm install --save body-parser
//lets you read the req.body

const bodyParser = require("body-parser");
app.use(bodyParser.json());
//parses URL-encoded requests
//extended: true makes sure req.body contains values of any type, not just strings
app.use(bodyParser.urlencoded({ extended: true }));

//mount all routes on api (just to differentiate front-end routes from back-end routes)
app.use("/api", require("./api"));

//because we want to build single-page applications, our server should send its index.html for any requests that don't match one of our API routes
app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "../index.html"));
});

//500 error will catch anything else that's messed up and log it out
app.use(function (err, req, res, next) {
  console.error(err);
  console.error(err.stack);
  res.status(err.status || 500).send(err.message || "Internal server error.");
});
