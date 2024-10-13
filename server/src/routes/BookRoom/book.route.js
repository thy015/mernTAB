const express = require("express");
const bookController = require("./bookRoom.controller");
const bookRouter = express.Router();

bookRouter.get("/invoice", bookController.getInvoicesWithReceipts);

bookRouter.post("/:id", bookController.bookRoom);
bookRouter.post("/transferCompleted/:id", bookController.completedTran);

bookRouter.get(
  "/bookingHistory",
  bookController.getRoomsBookedCustomer
);
module.exports = bookRouter;
