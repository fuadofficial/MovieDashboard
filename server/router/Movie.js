const express = require("express");
const movieModel = require("../Models/movieModel");
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const movieList = await movieModel
      .find({})
      .populate("genre")
      .sort({ createdAt: "desc" });
    console.log("🚀 ~ file: Movie.js:9 ~ router.get ~ movieList:", movieList);
    res.json(movieList);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.post("/", async (req, res) => {
  try {
    console.log(req.body);
    const movie = {
      imageName: req.body.image,
      movieName: req.body.movieName,
      rating: req.body.rating,
      genre: req.body.genre,
    };

    if (req.body.id != 0) {
      const resmovie = await movieModel.findByIdAndUpdate(req.body.id, {
        ...movie,
      });
      res.json(resmovie);
    } else {
      const movieList = await movieModel.create(movie);
      res.json(movieList);
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.post("/movieById", async (req, res) => {
  try {
    const movie = await movieModel.findById(req.body.id);
    res.json(movie);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.delete("/", async (req, res) => {
  try {
    const data = await movieModel.findByIdAndDelete(req.body.id);
    res.json(data);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;
