const mongoose = require("mongoose");

const locationSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "A location name must be provided."],
  },
  customers: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Customer",
    },
  ],
  createdDate: {
    type: Date,
    default: Date.now,
  },
});

const Location = mongoose.model("Location", locationSchema);

module.exports = Location;
