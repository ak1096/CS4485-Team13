const mongoose = require('mongoose');
const jwt = require("jsonwebtoken");
const bcrypt = require('bcrypt');
const Student = require('../models/student.model.js');
const Tutor = require('../models/tutor.model.js');

const loginUser = async (req, res) => {
    const { email, password } = req.body;
    const student = await Student.findOne({ email });
    const tutor = await Tutor.findOne({ email });
    console.log(req.body);

    if (!student && !tutor) {
        return res.json({ message: "Student or tutor doesn't exist!"});
    }

    let isPasswordValid;
    let token;
    let studentID;

    if (student) {
        isPasswordValid = await bcrypt.compare(password, student.password);
        if (!isPasswordValid) {
            return res.json({ message: "Password incorrect"});
        }
        token = jwt.sign({ id: student._id}, "secret");
        studentID = student._id;
    } else {
        isPasswordValid = await bcrypt.compare(password, tutor.password);
        if (!isPasswordValid) {
            return res.json({ message: "Password incorrect"});
        }
        token = jwt.sign({ id: tutor._id}, "secret");
        studentID = tutor._id;
    }

    res.json({ token, studentID });
};

// function validatePassword(isPasswordValid, res) {
//     if (!isPasswordValid) {
//         return res.json({ message: "Username or password is incorrect!"});
//     }
// };

// router.post("/login", async (req, res) => {
//     const { email, password } = req.body;
//     const user = await User.findOne({ email });
//     const tutor = await Tutor.findOne({ email });
//     console.log(req.body);

//     if (!user && !tutor) {
//         return res.json({ message: "User or tutor doesn't exist!"});
//     }

//     let isPasswordValid;
//     let token;
//     let userID;

//     if (user) {
//         isPasswordValid = await bcrypt.compare(password, user.password);
//         if (!isPasswordValid) {
//             return res.json({ message: "Password incorrect"});
//         }
//         token = jwt.sign({ id: user._id}, "secret");
//         userID = user._id;
//     } else {
//         isPasswordValid = await bcrypt.compare(password, tutor.password);
//         if (!isPasswordValid) {
//             return res.json({ message: "Password incorrect"});
//         }
//         token = jwt.sign({ id: tutor._id}, "secret");
//         userID = tutor._id;
//     }

//     res.json({ token, userID });
    
// });

module.exports = {
    loginUser
}