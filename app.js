const express = require("express");
const errorHandler = require("./handlers/errorHandler");
const mongoose = require("mongoose");
const userRoutes = require("./modules/users/users.routes");
const transactionRoutes = require("./modules/transactions/transactions.routes");


require("dotenv").config();

const app = express();

mongoose
    .connect(process.env.mongo_connection, {})
    .then(()=>{
        console.log("Mongo connection successfully!");
    }).catch(()=>{
        console.log("Mongo connection failed!");
    });

// Models initialization
require("./models/users.models");
require("./models/transactions.model");

app.use(express.json());

// Routes...
app.use("/api/users", userRoutes);
app.use("/api/transactions", transactionRoutes);

// End of all routes,,,,
app.use(errorHandler);


app.listen(8000, () => {
    console.log("Server started Successfully!");
});
