const express = require("express");
const {
  httpGetAllLaunches,
  httpLAddNewLaunches,
  httpAbortLaunch,
} = require("./launches.controller");

const launchesRouter = express.Router();

launchesRouter.get("/", httpGetAllLaunches);
launchesRouter.post("/", httpLAddNewLaunches);
launchesRouter.delete("/:id", httpAbortLaunch);

module.exports = launchesRouter;
