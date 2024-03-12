var express = require("express");
var router = express.Router();
const locationController = require("../controllers/locationController");

router.get("/", locationController.getAllLocations);
router.get("/:id", locationController.getLocation);
router.post("/", locationController.createLocation);
router.put("/:id", locationController.updateLocation);
router.delete("/:id", locationController.deleteLocation);

module.exports = router;
