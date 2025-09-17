const express = require("express");
const userModel = require("../models/user.model");
const jwt = require("jsonwebtoken");

const router = express.Router();

router.post("/register", async (req, res) => {
  const { username, password } = req.body;

  const isUserAlreadyExists = await userModel.findOne({
    username,
  });

  if (isUserAlreadyExists) {
    return res.status(409).json({
      message: "username already in use",
    });
  }

  const user = await userModel.create({ username, password });

  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);

  res.cookie("token", token);

  res.status(201).json({
    message: "User registered successfully",
    user,
  });
});

router.get("/user", async (req, res) => {
  const token = req.cookies.token;
  if (!token) {
    res.status(401).json({
      message: "unauthorized token not found",
    });
  }
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await userModel.findOne({
      _id: decoded.id,
    });

    res.status(200).json({
      message: "user data fetched successfully",
      user,
    });
  } catch (error) {
    res.status(401).json({
      message: "unAuthorized invalid token",
    });
  }
});

router.post("/login", async (req, res) => {
  const { username, password } = req.body;
  const user = await userModel.findOne({
    username,
  });

  if (!user) {
    return res.status(404).json({
      message: "user account not found",
    });
  }
  const isPasswordValid = user.password == password;
  if (!isPasswordValid) {
    res.status(401).json({
      message: "Invalid password",
    });
  }

  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);

  res.cookie("token", token, {
    expires: new Date(Date.now() + 1000 * 60 * 60 * 24 * 7),
  });

  res.status(200).json({
    message: "user logged in successfully",
    user,
  });
});

router.get("/logout", async (req, res) => {
  res.clearCookie("token");
  res.status(200).json({
    message: "user logged out successfully",
  });
});

module.exports = router;
