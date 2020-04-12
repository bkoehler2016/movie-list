exports.up = function (knex) {
  return knex.schema.createTable("movies", (tbl) => {
    tbl.increments();
    tbl.text("owner", 128).notNullable();
    tbl.text("title", 128).notNullable();
    tbl.decimal("release_year").notNullable();
    tbl.text("rating", 128).notNullable();
    tbl.text("format", 128);
  });
};

exports.down = function (knex) {
  return knex.schema.droptableIfExists("movies");
};
