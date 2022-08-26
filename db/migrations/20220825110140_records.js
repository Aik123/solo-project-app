/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

exports.up = function (knex) {
  return knex.schema.createTable("records", (table) => {
    table.increments("id").primary();
    table.timestamp("date_time").notNullable;
    table.string("day_of_week", 16).notNullable;
    table.string("moods", 16).notNullable;
    table.string("notes", 144).notNullable;
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable("records");
};
