const path = require("path");
const express = require("express");
const app = express();
const knex = require("knex");
const knexfile = require("./knexfile");

const db = knex(knexfile);

// app.use(express.static(path.resolve(__dirname, "/public")));

const setupServer = () => {
  app.use("/records", async (req, res) => {
    try {
      const allData = await db("records").select();
      res.json(allData);
    } catch (err) {
      console.error("Error loading store_address!", err);
      res.sendStatus(500);
    }
  });

  return app;
};

module.exports = { setupServer };
