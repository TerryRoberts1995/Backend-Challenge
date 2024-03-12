const mongoose = require("mongoose");

const customerSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: [true, "A FIRST name must be provided."],
  },
  lastName: {
    type: String,
    required: [true, "A LAST name must be provided."],
  },
  phone: {
    type: String,
    required: [true, "A Phone number must be provided."],
  },
  email: {
    type: String,
    unique: true,
    required: [true, "A Email must be provided."],
  },
  action: {
    type: String,
    default: "No Current Action",
  },
  locationId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Location",
  },
  createdDate: {
    type: Date,
    default: Date.now,
  },
});

const Customer = mongoose.model("customer", customerSchema);

module.exports = Customer;
