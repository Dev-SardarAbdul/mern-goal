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
      res.status(404).json({ error: "goal Not Found" });
    }

    res.status(200).json(goal);
  } catch (error) {
    res.status(400).json({ error: `${error.message}` });
  }
};

const createGoal = async (req, res) => {
  try {
    const { text, description } = req.body;

    const createdGoal = await Goal.create({ text, description });

    res.status(200).json(createdGoal);
  } catch (error) {
    res.status(400).json({ error: `${error.message}` });
  }
};

const deleteGoal = async (req, res) => {
  try {
    const goalId = req.params.id;

    const deletedGoal = await Goal.findByIdAndRemove(goalId);

    res.status(200).json(deletedGoal);
  } catch (error) {
    res.status(400).json({ error: `${error.message}` });
  }
};

const updateGoal = async (req, res) => {
  try {
    const goalId = req.params.id;

    const updatedGoal = await Goal.findByIdAndUpdate(goalId, req.body, {
      new: true,
    });

    if (!updatedGoal) {
      res.status(400).json({ Error: "Not Found" });
    }

    res.status(200).json(updatedGoal);
  } catch (error) {
    res.status(400).json({ Error: `${error.message}` });
  }
};

module.exports = {
  getGoal,
  getGoals,
  createGoal,
  deleteGoal,
  updateGoal,
};
