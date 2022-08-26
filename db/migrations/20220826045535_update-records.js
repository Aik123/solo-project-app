/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.table("records", (table) => {
    table.dropColumn("day_of_week");
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.createTable("records", (table) => {
    table.string("day_of_week", 16).notNullable;
  });
};
