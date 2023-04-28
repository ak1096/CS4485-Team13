const Student = require('../models/student.model.js');
const mongoose = require('mongoose');
//const jwt = require("jsonwebtoken");
const bcrypt = require('bcrypt');


// function validatePassword(isPasswordValid, res) {
//     if (!isPasswordValid) {
//         return res.json({ message: "Username or password is incorrect!"});
//     }
// };

// get all students
const getStudents = async (req, res) => {
    const students = await Student.find({})//.sort({createdAt: -1})
  
    res.status(200).json(students)
  }

// get a single student
const getStudent = (req, res) => {
    Student.find(req.params.netID)

    .then((student) => {
        if (!Student) {
            return res.status(404).json({
                error: 'No student found with that netID'
            });
        }

        res.status(200).json({
            message: 'Fetched student.',
            student: student
        });
    })
    .catch((error) => {
        res.status(500).json({
            message: 'Internal error.',
            error: error
        });
    });
}

// create new student
const createStudent = async (req, res) => {
    const { firstname, lastname, netID, password, classification, email, favorites } = req.body;
    //const { email } = req.body;
    const student = await Student.findOne({ email });
    console.log(req.body);

    if (student) {
        return res.json({ message: 'Student already exists!'});
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newStudent = new Student({ firstname, lastname, netID, password: hashedPassword, classification, email, favorites });
    await newStudent.save();

    res.json({ message: 'Student registered successfully'});

    // // add to the database
    // try {
    //     const stud = await Student.create({ firstname, lastname, netID, password, classification, email, favorites })
    //     res.status(200).json(stud)
    // } catch (error) {
    //     res.status(400).json({error: error.message})
    // }
}

// delete a student
const deleteStudent = async (req, res) => {
    Student.findOneAndDelete(req.params.netID)

    .then((student) => {
        if (!Student) {
            return res.status(404).json({
                error: 'No student found with that netID'
            });
        }

        res.status(200).json({
            message: 'Deleted student.',
            student: student
        });
    })
    .catch((error) => {
        res.status(500).json({
            message: 'Internal error.',
            error: error
        });
    });
}

// update a student ****
const updateStudent = async (req, res) => {
    const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({error: 'No student found'})
  }

  const student = await Student.findOneAndUpdate({_id: id}, {
    ...req.body
  })

  if (!student) {
    return res.status(400).json({error: 'No student found'})
  }

  res.status(200).json(student)
}

module.exports = {
    getStudents,
    getStudent,
    createStudent,
    deleteStudent,
    updateStudent
}