const express = require("express");
require("dotenv").config();
const app = express();
const mongoose = require("mongoose");
const goalRoutes = require("./routes/routes");
const port = process.env.PORT;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log(`Database connected`);
  })
  .catch((error) => {
    console.log(`Error: ${error.message}`);
  });

app.listen(port, () => {
  console.log(`Server running at port ${port}`);
});

app.use("/api/goals", goalRoutes);
