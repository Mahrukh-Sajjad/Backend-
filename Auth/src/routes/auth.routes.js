const express = require("express");
const userModel = require("../models/user.model");
const jwt = require("jsonwebtoken");

const dotenv = require("dotenv");

dotenv.config(); // load .env file

const router = express.Router();

router.post("/register", async (req, res) => {
  const { username, password } = req.cookies;
  const user = await userModel.create({
    username,
    password,
  });

  const token = jwt.sign(
    {
      id: user._id,
    },
    process.env.JWT_SECRET
  );

  res.cookie("token", token);

  res.status(201).json({
    message: "user registered successfully",
    user,
  });
});

router.post("/login", async (req, res) => {
  const { username, password } = req.body;

  const isUserExists = await userModel.findOne({
    username: username,
  });

  if (!isUserExists) {
    return res.status(401).json({
      message: "user account not found [invalid username]",
    });
  }

  const isValidPassword = password == isUserExists.password;

  if (!isValidPassword) {
    return res.status(401).json({
      message: "invalid password",
    });
  }
  res.status(200).json({
    message: "user loged in successfully",
  });
});

router.get("/user", async (req, res) => {
  const { token } = req.body;
  if (!token) {
    return res.status(401).json({
      message: "unauthorized",
    });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    const user = await userModel
      .findOne({
        _id: decoded.id,
      })
      .select("-password");
    res.status(200).json({
      message: "User fetched successfully",
      user,
    });
  } catch (err) {
    return res.status(401).json({
      message: "unAuthorized - Invalid token",
    });
  }
});

module.exports = router;
