const { setupServer } = require("./server");
require("dotenv").config();
const path = require("path");
const knex = require("knex");
const knexfile = require("./knexfile");
const db = knex(knexfile);

const PORT = process.env.PORT || 4000;

const server = setupServer();

// app.listen(PORT, () => {
//   console.log("Server running on port", PORT);
// });

(async () => {
  const dirPath = path.join(__dirname, "/db");
  try {
    console.log("Running migrations...");

    await db.migrate.latest(dirPath);
    await db.seed.run(dirPath);

    console.log("Starting express...");
    server.listen(PORT, () => {
      console.log(`App listening on port ${PORT}!`);
    });
  } catch (err) {
    console.error("Error starting app!", err);
    process.exit(-1);
  }
})();
