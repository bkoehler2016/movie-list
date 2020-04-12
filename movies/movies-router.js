const express = require("express");
const db = require("../data/db-config.js");

const router = express.Router();

router.get("/", (req, res) => {
  db("movies")
    .then((movies) => {
      res.json(movies);
    })
    .catch((err) => {
      res.status(500).json({ message: "Failed to retrieve Movies" });
    });
});
