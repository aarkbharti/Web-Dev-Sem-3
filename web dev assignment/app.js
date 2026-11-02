const express = require("express");
const studentRoutes = require("./routes/studentRoutes");

const app = express();

app.use(express.json());

const logger = (req, res, next) => {
  console.log(`${req.method} ${req.url} - ${new Date().toISOString()}`);
  next();
};

app.use(logger);

app.use("/students", studentRoutes);

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});