const express = require("express");
const {
  loginUser,
  registerUser,
  getUser,
} = require("../controllers/userController");

const router = express.Router();

router.post("/", registerUser);

router.post("/login", loginUser);

router.get("/me", getUser);

module.exports = router;
