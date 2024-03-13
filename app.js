const express = require("express");
const path = require("path");
const cors = require("cors");
const customerRouter = require("./routes/customerRouter");
const customerLogRouter = require("./routes/customerLogRouter");
const locationRouter = require("./routes/locationRouter");

const app = express();

app.use(express.json());
app.use(cors());
app.use("/customer", customerRouter);
app.use("/customerLog", customerLogRouter);
app.use("/location", locationRouter);

module.exports = app;
