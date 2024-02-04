const express = require("express");
const {
  httpGetAllLaunches,
  httpLAddNewLaunches,
} = require("./launches.controller");

const launchesRouter = express.Router();

launchesRouter.get("/", httpGetAllLaunches);
launchesRouter.post("/", httpLAddNewLaunches);

module.exports = launchesRouter;
