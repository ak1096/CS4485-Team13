const express = require("express");
const app = express()
const cors = require("cors");
const mongoose = require("mongoose");
const UserRouter = require("../routes/users.js")
require('dotenv').config();

app.use(cors());
app.use(express.json());

app.use("/auth", UserRouter);

const url = 'mongodb+srv://posadari:' + process.env.DB_PASSWORD + '@cluster0.yq35blg.mongodb.net/test2?retryWrites=true&w=majority'

async function connect() {
    try {
        await mongoose.connect(url);
        console.log("connected to mongodb");
    } catch(error) {
        console.error(error);
    }
}

connect();

app.get('/hello', (req, res) =>{
    res.send('hello world');
})

app.listen(8080, () => {
    console.log('Server started on port 8080')
})