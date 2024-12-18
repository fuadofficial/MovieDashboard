const mongoose = require("mongoose");

const movieSchema = mongoose.Schema(
  {
    movieName: { type: String, trim: true, required: true },
    rating: Number,
    genre: [{ type: mongoose.Schema.Types.ObjectId, ref: "genre" }],
    imageName: { type: String }, // Added imageName field
  },
  { timestamps: true }
);

module.exports = mongoose.model("Movies", movieSchema);
