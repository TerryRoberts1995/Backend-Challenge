const CustomerLog = require("../models/customerLogModel");
const Customer = require("../models/customerModel");

exports.getAllCustomerLogs = async (req, res) => {
  try {
    const customerLogs = await CustomerLog.find();
    res.status(200).json({
      status: "success",
      data: { customerLogs },
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: "Failed to fetch logs.",
      error: error.message,
    });
  }
};

exports.getCustomerLog = async (req, res) => {
  try {
    const customerLog = await CustomerLog.findById(req.params.id);

    res.status(200).json({
      status: "success",
      data: { customerLog },
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: "Failed to fetch customer log.",
      error: error.message,
    });
  }
};

exports.getCustomerLogsByDateAndLocation = async (req, res) => {
  try {
    const locationId = req.params.locationId;
    const startDate = req.params.startDate;
    const endDate = req.params.endDate;

    const customers = await Customer.find({ locationId: locationId });

    const customerLogs = await CustomerLog.find({
      customer: { $in: customers.map((customer) => customer._id) },
      date: { $gte: new Date(startDate), $lte: new Date(endDate) },
    });

    res.status(200).json({
      message: "success",
      data: { customerLogs },
    });
  } catch (error) {
    console.log("Error filtering your logs by Date Range & Location.", error);
  }
};

exports.createCustomerLog = async (req, res) => {
  try {
    const newCustomerLog = await CustomerLog.create(req.body);

    res.status(200).json({
      status: "success",
      data: { customerLog: newCustomerLog },
    });
  } catch (error) {
    res.status(400).json({
      status: "failed",
      message: error,
    });
  }
};

exports.updateCustomerLog = async (req, res) => {
  try {
    const customerLog = await CustomerLog.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );

    res.status(200).json({
      status: "success",
      data: { customerLog },
    });
  } catch (error) {
    res.status(400).json({
      status: "failed",
      message: error,
    });
  }
};

exports.deleteCustomerLog = async (req, res) => {
  try {
    res.status(204).json({
      status: "log deletion successful.",
    });
  } catch (error) {
    res.status(400).json({
      status: "error",
      message: "Failed to delete log.",
      error: error.message,
    });
  }
};
