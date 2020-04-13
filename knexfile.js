// Update with your config settings.

module.exports = {
  development: {
    client: "sqlite3",
    connection: {
      filename: "./data/movie.db3",
    },
    useNullAsDefault: true,

    migrations: {
      directory: "./data/migrations",
    },
    seeds: {
      directory: "./data/seeds",
    },
  },
  production: {
    client: "sqlite3",
    useNullAsDefault: true,
    connection: {
      filename: "/data/movie.db3",
    },
  },
};
