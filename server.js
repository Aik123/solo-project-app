const path = require("path");
const express = require("express");
const app = express();
const knex = require("knex");
const knexfile = require("./knexfile");
const { dirname } = require("path");

const db = knex(knexfile);

console.log(__dirname);
app.use(express.static(path.resolve(__dirname, "/build")));

const setupServer = () => {
  app.use(express.json());

  app.get("/records", async (req, res) => {
    try {
      const allData = await db("records").select().orderBy("date_time", "desc");
      res.json(allData);
    } catch (err) {
      console.error("Error loading store_address!", err);
      res.sendStatus(500);
    }
  });

  let lastId;
  const getLastId = async () => {
    return (lastId = await db("records").count("id"));
  };

  app.post("/records", async (req, res) => {
    await getLastId();
    console.log(req.body);
    await db("records")
      .insert({
        id: Number(lastId[0].count) + 1,
        date_time: req.body.date_time,
        moods: req.body.moods,
        notes: req.body.notes,
      })
      .then(() => res.status(201).send(req.body));
  });

  return app;
};

module.exports = { setupServer };
