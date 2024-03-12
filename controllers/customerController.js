const Customer = require("../models/customerModel");
const CustomerLog = require("../models/customerLogModel");

exports.getAllCustomers = async (req, res) => {
  try {
    const customers = await Customer.find();
    res.status(200).json({
      status: "success",
      data: { customers },
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: "Failed to fetch customers.",
      error: error.message,
    });
  }
};

exports.getCustomer = async (req, res) => {
  try {
    const customer = await Customer.findById(req.params.id);

    res.status(200).json({
      status: "success",
      data: { customer },
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: "Failed to fetch customer.",
      error: error.message,
    });
  }
};

exports.createCustomer = async (req, res) => {
  try {
    const newCustomer = await Customer.create(req.body);

    await CustomerLog.create({
      text: "Created a new customer",
      type: "Creation",
      customer: newCustomer._id,
      date: new Date(),
    });

    res.status(200).json({
      status: "success",
      data: { customer: newCustomer },
    });
  } catch (error) {
    res.status(400).json({
      status: "failed",
      message: error,
    });
  }
};

exports.updateCustomer = async (req, res) => {
  try {
    const customer = await Customer.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    await CustomerLog.create({
      text: "Updated a customers Information",
      type: "Update",
      customer: customer._id,
      date: new Date(),
    });
    res.status(200).json({
      status: "success",
      data: { customer },
    });
  } catch (error) {
    res.status(400).json({
      status: "failed",
      message: error,
    });
  }
};

exports.deleteCustomer = async (req, res) => {
  try {
    const customer = await Customer.findById(req.params.id);

    await CustomerLog.create({
      text: `Customer ${customer._id} has been successfully deleted.`,
      type: "Deletion",
      customer: customer._id,
      date: new Date(),
    });

    res.status(204).json({
      status: "customer deletion successful.",
    });
  } catch (error) {
    res.status(400).json({
      status: "error",
      message: "Failed to delete customer.",
      error: error.message,
    });
  }
};
