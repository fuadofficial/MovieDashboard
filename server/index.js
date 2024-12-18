const express = require("express");
require("dotenv").config();
const cors = require("cors");
const connectDb = require("./config/db");
const genreRouter = require("./router/Genre");
const movieRoter = require("./router/Movie");

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static("public"));
connectDb();

app.use("/api/genre", genreRouter);
app.use("/api/movie", movieRoter);

const PORT = process.env.PORT || 3457;
app.listen(PORT, () => console.log("server started at " + PORT));
