const { doesNotMatch } = require("assert");
const chai = require("chai");
const { expect, assert } = require("chai");
const chaiHttp = require("chai-http");
const config = require("../knexfile");
const knex = require("knex")(config);
const { setupServer } = require("../server");
const server = setupServer();

chai.use(chaiHttp);

const testData = {
  id: 100,
  date_time: "2022-08-25 06:12:40",
  moods: "穏やか、ハッピー✨",
  notes: "これはテストです",
};

describe("database & API test", () => {
  let app;
  beforeEach(() => {
    app = chai.request(server);
  });

  before(async () => {
    await knex("records")
      .insert(testData)
      .returning("id")
      .then((res) => {
        console.log("inserted testData");
      })
      .catch(console.error);
  });

  after(async () => {
    await knex("records")
      .where("id", 100)
      .returning("id")
      .del()
      .then((res) => {
        console.log("removed testData");
      })
      .catch(console.error);

    length = await knex("records").count("id");
  });

  describe("setup", () => {
    xit("should connect to database PASED and CLOSED", () => {
      knex.raw("select 1 as result").catch(() => {
        assert.fail("unable to connect to database");
      });
    });

    it("has run the initial migration", () => {
      knex("records")
        .select()
        .catch(() => assert.fail("records table is not found."));
    });
  });

  describe("get methods", () => {
    it("should get all data from records", async () => {
      const expected = await knex("records")
        .select()
        .orderBy("date_time", "desc");
      const res = await app.get("/records");
      const actual = JSON.parse(res.text);
      expect(actual[0].date_time).to.eq(expected[0].date_time.toJSON());
      expect(actual[0].moods).to.eq(expected[0].moods);
      expect(actual.length).to.eq(expected.length);
    });
  });

  describe("post methods", () => {
    it("should insert new column into records", (done) => {
      app
        .post("/records")
        .send({
          date_time: "2022-08-25 14:00:01",
          moods: "眠い💤、気分下がり気味😣",
          notes: "これはテスト2です",
        })
        .end((err, res) => {
          expect(err).to.be.null;
          expect(res).to.have.status(201);
          done();
        });
    });
  });
});
