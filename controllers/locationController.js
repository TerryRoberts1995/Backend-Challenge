const Location = require("../models/locationModel");

exports.getAllLocations = async (req, res) => {
  try {
    const locations = await Location.find();
    res.status(200).json({
      status: "success",
      data: { locations },
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: "Failed to fetch locations.",
      error: error.message,
    });
  }
};

exports.getLocation = async (req, res) => {
  try {
    const location = await Location.findById(req.params.id);

    res.status(200).json({
      status: "success",
      data: { location },
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: "Failed to fetch location.",
      error: error.message,
    });
  }
};

exports.createLocation = async (req, res) => {
  try {
    const newLocation = await Location.create(req.body);

    res.status(200).json({
      status: "success",
      data: { location: newLocation },
    });
  } catch (error) {
    res.status(400).json({
      status: "failed",
      message: error,
    });
  }
};

exports.updateLocation = async (req, res) => {
  try {
    const location = await Location.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    res.status(200).json({
      status: "success",
      data: { location },
    });
  } catch (error) {
    res.status(400).json({
      status: "failed",
      message: error,
    });
  }
};

exports.deleteLocation = async (req, res) => {
  try {
    res.status(204).json({
      status: "Location deletion successful.",
    });
  } catch (error) {
    res.status(400).json({
      status: "error",
      message: "Failed to delete location.",
      error: error.message,
    });
  }
};
