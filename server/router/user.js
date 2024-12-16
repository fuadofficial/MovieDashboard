const express = require("express");
const userRouter = express.Router();
const {
  signIn,
  signup,
  watchlater,
  addtoWathclater,
  forgotPassword,
  resetPassword,
} = require("../controller/userController");
const { checkAuth } = require("../middleware/checkAuth");

userRouter.post("/signIn", signIn);

userRouter.post("/signUp", signup);

userRouter.get("/watchlist", checkAuth, watchlater);

userRouter.post("/addwatchlater", checkAuth, addtoWathclater);

userRouter.post("/forgotPassword", forgotPassword);

userRouter.post("/resetPassword", resetPassword);

module.exports = userRouter;
