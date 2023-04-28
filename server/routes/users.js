const express = require("express");
const jwt = require("jsonwebtoken");
const bcrypt = require('bcrypt');
const User = require("../models/user.model.js");
const Tutor = require("../models/tutor.model.js");

const router = express.Router();

// defines a route for a POST request to register a new student user
router.post("/student-register", async (req, res) => {
    const { firstName, lastName, email, password, year } = req.body;

    const user = await User.findOne({ email });
    console.log(req.body);

    if (user) {
        return res.json({ message: 'User already exists!'});
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({ firstName, lastName, email, password: hashedPassword, year });
    await newUser.save();

    res.json({ message: 'User registered successfully'});
});


// defines a route for a POST request to register a new tutor user
router.post("/tutor-register", async (req, res) => {
    const { firstName, lastName, email, password, biography, subjects, selectedDays } = req.body;

    const user = await Tutor.findOne({ email });
    console.log(req.body);

    if (user) {
        return res.json({ message: 'User already exists!'});
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new Tutor({ firstName, lastName, email, password: hashedPassword, biography, subjects, selectedDays });
    await newUser.save();

    res.json({ message: 'Tutor registered successfully'});
});

router.post("/login", async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    const tutor = await Tutor.findOne({ email });
    console.log(req.body);

    if (!user && !tutor) {
        return res.json({ message: "User or tutor doesn't exist!"});
    }

    let isPasswordValid;
    let token;
    let userID;

    if (user) {
        isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.json({ message: "Password incorrect"});
        }
        token = jwt.sign({ id: user._id}, "secret");
        userID = user._id;
    } else {
        isPasswordValid = await bcrypt.compare(password, tutor.password);
        if (!isPasswordValid) {
            return res.json({ message: "Password incorrect"});
        }
        token = jwt.sign({ id: tutor._id}, "secret");
        userID = tutor._id;
    }

    res.json({ token, userID });
    
});

module.exports = router;