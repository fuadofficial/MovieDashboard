const mongoose = require("mongoose");

//create proper shema for movie
const movieShema = mongoose.Schema(
  {
    imageName: String,
    movieName: {
      type: String,
      trim: true,
      required: true,
    },
    rating: Number,
    genre: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "genre",
      },
    ],
  },
  { timestamps: true, strict: false }
);

module.exports = mongoose.model("Movies", movieShema);
