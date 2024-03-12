const mongoose = require("mongoose");

const customerLogSchema = new mongoose.Schema({
  text: String,
  type: {
    type: String,
    required: [true, "You must provide a type."],
  },
  customer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Customer",
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

const CustomerLog = mongoose.model("CustomerLog", customerLogSchema);

module.exports = CustomerLog;
