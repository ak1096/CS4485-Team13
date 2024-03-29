const express = require("express");
const app = express()
const cors = require("cors");
const mongoose = require("mongoose");
const UserRouter = require("../routes/users.js");
const TutorRouter = require("../routes/tutors.js");

require('dotenv').config();
app.use(cors());
app.use(express.json());
app.use("/auth", UserRouter);
app.use("/tutors", TutorRouter);

const url = "mongodb+srv://kiaraaleecia:" + process.env.DB_PASSWORD + "@ihkh.1nvgnmc.mongodb.net/test";
async function connect() {
    try {
        await mongoose.connect(url);
        console.log("connected to mongodb");
    } catch(error) {
        console.error(error);
    }
}

connect();

app.listen(8080, () => {
    console.log('Server started on port 8080')
})