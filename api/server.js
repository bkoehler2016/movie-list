const express = require("express");
const helmet = require("helmet");

const moviesRouter = require("../movies/movies-router.js");

const server = express();

server.use(helmet());
server.use(express.json());

server.use("/api/movies", moviesRouter);

module.exports = server;
