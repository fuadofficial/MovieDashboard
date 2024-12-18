const mongoose = require("mongoose");

const movieSchema = mongoose.Schema(
  {
    movieName: { type: String, required: true },
    description: { type: String, required: true },
    rating: { type: Number, required: true },
    genre: [{ type: mongoose.Schema.Types.ObjectId, ref: "genre" }],
    imageName: { type: String, required: true }
  },
  { timestamps: true, trim: true, }
);

module.exports = mongoose.model("Movies", movieSchema);
