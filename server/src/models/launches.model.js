const launches = new Map();

let latestFlightNumber = 100;

const launch = {
  flightNumber: 100,
  mission: "Kepler Explore", //i/p
  rocket: "Explore IS1", //i/p
  launchDate: new Date("December 23,2040"), //i/p
  target: "Kepler-442 b", //i/p
  customer: ["NASA", "ZTM"],
  upcoming: true,
  success: true,
};

launches.set(launch.flightNumber, launch);

function existLaunch(launchId) {
  return launches.has(launchId);
}

function getAllLaunches() {
  return Array.from(launches.values());
}

function addNewLaunch(launch) {
  latestFlightNumber++;
  launches.set(
    latestFlightNumber,
    Object.assign(launch, {
      upcoming: true,
      success: true,
      customer: ["Zero to Mastery", "NASA"],
      flightNumber: latestFlightNumber,
    })
  );
}

function abortLaunchById(launchId) {
  const aborted = launches.get(launchId);
  console.log(aborted, "aborted------");

  aborted.upcoming = false;
  aborted.success = false;

  return aborted;
}

module.exports = {
  existLaunch,
  getAllLaunches,
  addNewLaunch,
  abortLaunchById,
};
