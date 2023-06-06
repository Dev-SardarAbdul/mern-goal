const express = require("express");

const router = express.Router();
const {
  getGoal,
  getGoals,
  deleteGoal,
  updateGoal,
  createGoal,
} = require("../controllers/goalController");

router.get("/", getGoals);

router.get("/:id", getGoal);

router.post("/", createGoal);

router.delete("/:id", deleteGoal);

router.put("/:id", updateGoal);

module.exports = router;
