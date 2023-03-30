const express = require("express");
const jwt = require("jsonwebtoken");
const bcrypt = require('bcrypt');
const User = require("../models/user.model.js");

const router = express.Router();

router.post("/register", async (req, res) => {
    const { firstName, lastName, email, password } = req.body;

    const user = await User.findOne({ email });
    console.log(req.body);

    if (user) {
        return res.json({ message: 'User already exists!'});
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({ firstName, lastName, email, password: hashedPassword });
    await newUser.save();

    res.json({ message: 'User registered successfully'});
});

router.post("/login", async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    console.log(req.body);

    if (!user) {
        return res.json({ message: "User doesn't exist!"});
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
        return res.json({ message: "Username or password is incorrect!"});
    }

    const token = jwt.sign({ id: user._id}, "secret");
    res.json({ token, userID: user._id});
})

module.exports = router;