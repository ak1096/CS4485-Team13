const express = require("express");
const jwt = require("jsonwebtoken");
const bcrypt = require('bcrypt');
const User = require("../models/user.model.js");
const Tutor = require("../models/tutor.model.js");

const router = express.Router();

router.get('/get-favorites', async (req, res) => {
    try {
        const userId = req.query.userId;
        const user = await User.findById(userId).populate('favorites');
        console.log(user.favorites);
        res.json(user.favorites);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
});

router.post('/update-favorites', async (req, res) => {
    const { userId, tutorId } = req.body;
    const user = await User.findById(userId);
    console.log('userId: ' + userId);

    if (!user) {
        return res.status(404).json({ message: 'User not found' });
    }

    const index = user.favorites.findIndex((fav) => fav.toString() === tutorId);
    if (index === -1) {
        // tutor is not in favorites, so add it
        user.favorites.push(tutorId);
        await user.save();
        res.json({ message: 'Tutor added to favorites' });
    } else {
        // tutor is in favorites, so remove it
        user.favorites.splice(index, 1);
        await user.save();
        res.json({ message: 'Tutor removed from favorites' });
    }
});


// defines a route for a POST request to register a new student user
router.post("/student-register", async (req, res) => {
    const { firstName, lastName, email, password, year } = req.body;

    const user = await User.findOne({ email });
    console.log(req.body);

    if (user) {
        return res.json({ message: 'User already exists!' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({ firstName, lastName, email, password: hashedPassword, year });
    await newUser.save();

    res.json({ message: 'User registered successfully' });
});

// defines a route for a POST request to register a new tutor user
router.post("/tutor-register", async (req, res) => {
    const { firstName, lastName, email, password, biography, subjects, selectedDays } = req.body;

    const user = await Tutor.findOne({ email });
    console.log(req.body);

    if (user) {
        return res.json({ message: 'User already exists!' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new Tutor({ firstName, lastName, email, password: hashedPassword, biography, subjects, selectedDays });
    await newUser.save();

    res.json({ message: 'Tutor registered successfully' });
});

router.post("/login", async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    const tutor = await Tutor.findOne({ email });
    console.log(req.body);

    if (!user && !tutor) {
        return res.json({ message: "User or tutor doesn't exist!" });
    }

    let isPasswordValid;
    let token;
    let userID;
    let userType;

    if (user) {
        isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.json({ message: "Password incorrect" });
        }
        token = jwt.sign({ id: user._id }, "secret");
        userID = user._id;
        userType = "user";
    } else {
        isPasswordValid = await bcrypt.compare(password, tutor.password);
        if (!isPasswordValid) {
            return res.json({ message: "Password incorrect" });
        }
        token = jwt.sign({ id: tutor._id }, "secret");
        userType = "tutor";
        userID = tutor._id;
    }
    res.json({ token, userID, userType });
});

router.get('/get-appointments', async (req, res) => {
    try {
        const userId = req.query.userId;
        const userType = req.query.userType;
        if (userType === 'user') {
            const user = await User.findById(userId).populate('appointments');
            res.json(user.appointments);
        } else {
            const tutor = await Tutor.findById(userId).populate('appointments');
            res.json(tutor.appointments);
        }
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
});

router.post("/create-appointments", async (req, res) => {
    try {
        // Find the user by ID
        const user = await User.findById(req.query.userId);
        const tutor = await Tutor.findById(req.body.tutorID);
        const { firstName, lastName, email, password, year } = user;
        const userName = `${firstName} ${lastName}`;

        const newUserAppointment = { ...req.body, tutorName: req.body.tutorName };
        const newTutorAppointment = { ...req.body, userName: userName };

        const hasAppointmentConflict = (appointmentList, newAppointment) => {
            return appointmentList.some((appointment) => {
              const newStart = new Date(newAppointment.startTime);
              const newEnd = new Date(newAppointment.endTime);
              const existingStart = new Date(appointment.startTime);
              const existingEnd = new Date(appointment.endTime);
              return (
                (newStart >= existingStart && newStart < existingEnd) ||
                (newEnd > existingStart && newEnd <= existingEnd) ||
                (newStart <= existingStart && newEnd >= existingEnd)
              );
            });
          };
      
          const tutorHasAppointment = hasAppointmentConflict(tutor.appointments, newTutorAppointment);
          const userHasAppointment = hasAppointmentConflict(user.appointments, newUserAppointment);
      

        if (tutorHasAppointment || userHasAppointment) {
            return res.json({ message: "Appointment already exists" });
        }

        // Add the new appointment to the user's appointments array
        user.appointments.push(newUserAppointment);
        tutor.appointments.push(newTutorAppointment);

        // Save the updated user document to the database
        await user.save();
        await tutor.save();

        res.status(200).json({ message: 'Appointment added successfully' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server error' });
    }
});

module.exports = router;