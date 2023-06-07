const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const User = require("../model/userModel");

const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      res.status(400).json({ error: "Please fill all of fields" });
    }

    const userExists = await User.findOne({ email });

    if (userExists) {
      res.status(400).json({ error: "User already exists" });
    }

    const salt = await bcrypt.genSalt(18);
    const hashedPassword = await bcrypt.hash(password, salt);

    const user = await User.create({ name, email, password: hashedPassword });

    if (user) {
      res.status(200).json(user);
    }
  } catch (error) {
    res.status(400).json({ error: `${error.message}` });
  }
};

const loginUser = async (req, res) => {
  res.json({ message: "Login Users" });
};

const getUser = async (req, res) => {
  res.status(200).json("hello world");
};

module.exports = { loginUser, registerUser, getUser };
