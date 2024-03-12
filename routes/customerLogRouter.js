var express = require("express");
var router = express.Router();
const customerLogController = require("../controllers/customerLogController");

router.get("/", customerLogController.getAllCustomerLogs);
router.get("/:id", customerLogController.getCustomerLog);
router.get(
  "/:locationId/:startDate/:endDate",
  customerLogController.getCustomerLogsByDateAndLocation
);
router.post("/", customerLogController.createCustomerLog);
router.put("/:id", customerLogController.updateCustomerLog);
router.delete("/:id", customerLogController.deleteCustomerLog);

module.exports = router;
