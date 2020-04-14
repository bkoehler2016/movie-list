// Update with your config settings.

module.exports = {
  development: {
    client: "sqlite",
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
    client: "sqlite",
    useNullAsDefault: true,
    connection: {
      filename: "/data/movie.db3",
    },
  },
};
