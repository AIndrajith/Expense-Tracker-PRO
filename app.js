const express = require("express");
const errorHandler = require("./handlers/errorHandler");
const mongoose = require("mongoose");


require("dotenv").config();

const app = express();

mongoose.connect(process.env.mongo_connection, {}).then(()=>{
    console.log("Mongo connection successfully!");
}).catch(()=>{
    console.log("Mongo connection failed!");
});

// Models initialization
require("./models/users.models");


app.use(express.json);

// End of all routes,,,,
app.use(errorHandler);


app.listen(8000, () => {
    console.log("Server started Successfully!");
});
