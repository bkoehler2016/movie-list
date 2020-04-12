exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("movies")
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex("movies").insert([
        {
          owner: "Rebecca Koehler",
          title: "SecondHand Lions",
          release_year: 2003,
          rating: "PG",
          format: "DVD",
        },
      ]);
    });
};
