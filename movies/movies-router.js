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

router.get("/:id", (req, res) => {
  db("movies")
    .where({ id: req.params.id })
    .first()
    .then((movie) => {
      if (movie) {
        res.status(200).json({ data: movie });
      } else {
        res.status(400).json({ message: "Movie not found" }); // worked on postman
      }
    })
    .catch((error) => {
      res.status(500).json({ message: "sorry, ran into an error" });
    });
});

router.post("/", (req, res) => {
  const movieData = req.body;

  db("movies")
    .insert(movieData)
    .then((movie) => {
      res.status(201).json(movie);
    })
    .catch((err) => {
      res.status(500).json({ message: "failed to add movie", err });
    });
});

router.put("/:id", (req, res) => {
  const { id } = req.params;
  const changes = req.body;

  db("movies")
    .where({ id })
    .update(changes)
    .then((count) => {
      if (count) {
        res.json({ updated: count });
      } else {
        res.status(404).json({ message: "invalid id" });
      }
    })
    .catch((err) => {
      res.status(500).json({ message: "error update", err });
    });
});

router.delete("/:id", (req, res) => {
  db("movies")
    .where({ id: req.params.id })
    .del()
    .then((count) => {
      if (count > 0) {
        res.status(200).json({ message: "record deleted successfully" });
      } else {
        res.status(404).json({ message: "Post not found" });
      }
    })
    .catch((error) => {
      res.status(500).json({ message: "sorry, ran into an error", error });
    });
});
module.exports = router;
