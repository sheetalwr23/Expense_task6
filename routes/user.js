const express = require("express");
const router = express.Router();
const controller = require("../controller/user");
const exController = require("../controller/expense");
const path = require("path");
const verifyToken = require("../controller/user");
const jwt = require("jsonwebtoken");
router.use(express.static(path.join(__dirname, "public")));

router.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "public", "index.html"));
});

router.post("/signup", controller.createSignupController);
router.post("/login", controller.createloginController);

router.post("/expense", exController.createExpenseController);
router.get("/expense", exController.getExpenseController);
router.delete("/expense/:id", exController.deleteExpense);

// A
module.exports = router;
