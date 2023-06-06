const Goal = require("../model/goalsModel");

const getGoals = async (req, res) => {
  try {
    const goal = await Goal.find({});

    res.status(200).json(goal);
  } catch (error) {
    res.status(400).json({ error: `${error.message}` });
  }
};

const getGoal = async (req, res) => {
  try {
    const goalId = req.params.id;

    const goal = await Goal.findById(goalId);

    if (!goal) {
      res.status(400).json({ error: `Goal Not Found` });
    }

    res.status(200).json(goal);
  } catch (error) {
    res.status(400).json({ error: `${error.message}` });
  }
};

const createGoal = async (req, res) => {
  try {
    const { text, description } = req.body;

    const goal = await Goal.create({ text, description });

    res.status(400).json(goal);
  } catch (error) {
    res.status(400).json({ error: `${error.message}` });
  }
};

const deleteGoal = async (req, res) => {
  try {
    const goalId = req.params.id;
    const goal = await Goal.findByIdAndRemove(goalId);

    res.status(200).json(goal);
  } catch (error) {
    res.status(400).json({ error: `${error.message}` });
  }
};

const updateGoal = async (req, res) => {
  res.status(200).json({ message: "hello world" });
};

module.exports = {
  getGoal,
  getGoals,
  createGoal,
  deleteGoal,
  updateGoal,
};
