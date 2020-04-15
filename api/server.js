require("dotenv").config();
const express = require("express");
const helmet = require("helmet");

const moviesRouter = require("../movies/movies-router.js");
const proxy = require("http-proxy-middleware");

module.exports = function (app) {
  // add other server routes to path array
  app.use(proxy(["/api"], { target: "http://localhost:5002" }));
};
const server = express();
const cors = require("cors");

server.use(helmet());
server.use(express.json());
server.use(cors());

server.use("/api/movies", moviesRouter);

module.exports = server;
