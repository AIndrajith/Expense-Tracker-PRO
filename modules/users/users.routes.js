const express = require("express");
const register = require("./Controllers/register");
const login = require("./Controllers/login");
const userDashboard = require("./Controllers/userDashboard");

const userRoutes = express.Router();

// Routes...

userRoutes.post("/register", register);
userRoutes.post("/login", login);

userRoutes.get("/dashboard", userDashboard);



module.exports = userRoutes;