const express = require("express");
const recipeRouter = require("./routes/recipeRouter");

const server = express();

server.use(express.json());
server.use("/api/recipes", recipeRouter);

// * sanity
server.get("/", (req, res) =>
  res.status(200).json({ message: "Good news everyone" })
);

module.exports = server;
