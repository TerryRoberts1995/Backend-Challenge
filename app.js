var express = require("express");
var path = require("path");

var customerRouter = require("./routes/customerRouter");
var customerLogRouter = require("./routes/customerLogRouter");
var locationRouter = require("./routes/locationRouter");

var app = express();

app.use(express.json());
app.get("/", (req, res) => {
  res.send("TESTING");
});
app.use("/customer", customerRouter);
app.use("/customerLog", customerLogRouter);
app.use("/location", locationRouter);

module.exports = app;
