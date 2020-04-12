const express = require("express");
const helmet = require("helmet");

const moviesRouter = require("../movies/movies-router.js");

const server = express();
const cors = require("cors");

server.use(helmet());
server.use(express.json());
server.use(cors());

server.use("/api/movies", moviesRouter);

module.exports = server;
