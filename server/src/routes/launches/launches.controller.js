const {
  getAllLaunches,
  addNewLaunch,
  existLaunch,
  abortLaunchById,
} = require("../../models/launches.model");

function httpGetAllLaunches(req, res) {
  return res.status(200).json(getAllLaunches());
}

function httpLAddNewLaunches(req, res) {
  const launch = req.body;

  if (
    !launch.mission ||
    !launch?.rocket ||
    !launch?.launchDate ||
    !launch?.target
  ) {
    res.status(400).json({
      error: "Missing required launch property",
    });
  }
  launch.launchDate = new Date(launch.launchDate); //here Date Object will convert to the number we can validate by using if(iaNaN(launch.launchDate))

  // ==> if we call the Date object it will call first the valueOf() func this will convert to a Number
  if (
    launch.launchDate.toString() === "Invalid Date" ||
    isNaN(launch?.launchDate)
  ) {
    return res.status(400).json({
      error: "Invalid launch Date",
    });
  }
  addNewLaunch(launch);

  return res.status(201).json(launch);
}

function httpAbortLaunch(req, res) {
  const launchId = Number(req.params.id);

  console.log(launchId);

  //if launch doesn't exist
  if (!existLaunch) {
    return res.status(404).json({
      error: "Launch not found",
    });
  }

  //if launch exist
  const aborted = abortLaunchById(launchId);
  return res.status(200).json(aborted);
}
module.exports = {
  httpLAddNewLaunches,
  httpGetAllLaunches,
  httpAbortLaunch,
};
