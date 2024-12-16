const mongoose = require("mongoose");

const genreSchema = mongoose.Schema(
  {
    genre: {
      type: String,
      required: true,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('genre', genreSchema);
