const connectDB = require("./db/connection");
const express = require("express");
require("dotenv").config();
const tasksRouter = require("./routers/tasks");

const server = express();
const port = 4000;

// Middleware
server.use(express.json());

// Routes
server.get("/", (req, res) => {
  res.status(200).send("Hello world");
});
server.use("/api/v1", tasksRouter);

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    server.listen(port, () => {
      console.log("server listening to port " + port);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
