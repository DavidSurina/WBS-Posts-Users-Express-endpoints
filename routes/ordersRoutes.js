const express = require("express");
const router = express.Router();

const orderController = require("../controllers/orderController");

router.route("/").get(orderController.getAllOrders);

router.route("/:id").get(orderController.getOrderById);

module.exports = router;