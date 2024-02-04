const app = require("./app.js");
const http = require("http");

const PORT = process.env.PORT || 8000;

const { loadPlanetsData } = require("./models/planets.model.js");

const server = http.createServer(app);

async function startServer() {
  await loadPlanetsData();

  server.listen(PORT, () => {
    console.log(`Server is listening in the ${PORT}....`);
  });
}

startServer();
