const Tutor = require('../models/tutor.model.js');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

// function validatePassword(isPasswordValid, res) {
//     if (!isPasswordValid) {
//         return res.json({ message: "Username or password is incorrect!"});
//     }
// };

// get all tutors
const getTutors = async (req, res) => {
    const tutors = await Tutor.find({}).sort({createdAt: -1})
  
    res.status(200).json(tutors)
  }

// get a single tutor
const getTutor = async (req, res) => {
    Tutor.findOne(req.params.netID)

    .then((tutor) => {
        if (!tutor) {
            return res.status(404).json({
                error: 'No tutor found with that netID'
            });
        }

        res.status(200).json({
            message: 'Fetched tutor.',
            tutor: tutor
        });
    })
    .catch((error) => {
        res.status(500).json({
            message: 'Internal error.',
            error: error
        });
    });
}

// create new tutor
const createTutor = async (req, res) => {
    const { firstname, lastname, netID, password, classification, email, biography, topics, skills, rating, availablehours } = req.body;

    const tutor = await Tutor.findOne({ email });
    console.log(req.body);

    if (tutor) {
        return res.json({ message: 'Tutor already exists!'});
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newTutor = new Tutor({ firstname, lastname, netID, password: hashedPassword, classification, email, biography, topics, skills, rating, availablehours });
    await newTutor.save();

    res.json({ message: 'Tutor registered successfully'});

    // // add to the database
    // try {
    //     const tut = await Tutor.create({ firstname, lastname, netID, password, classification, email, topics, skills, rating, availablehours })
    //     res.status(200).json(tut)
    // } catch (error) {
    //     res.status(400).json({error: error.message})
    // }
}

// delete a tutor
const deleteTutor = async (req, res) => {
    Tutor.findOneAndDelete(req.params.netID)

    .then((tutor) => {
        if (!Tutor) {
            return res.status(404).json({
                error: 'No tutor found with that netID'
            });
        }

        res.status(200).json({
            message: 'Deleted tutor.',
            tutor: tutor
        });
    })
    .catch((error) => {
        res.status(500).json({
            message: 'Internal error.',
            error: error
        });
    });
}

// update a tutor ****
const updateTutor = async (req, res) => {
    const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({error: 'No tutor found'})
  }

  const tutor = await Tutor.findOneAndUpdate({_id: id}, {
    ...req.body
  })

  if (!tutor) {
    return res.status(400).json({error: 'No tutor found'})
  }

  res.status(200).json(tutor)
}

module.exports = {
    getTutors,
    getTutor,
    createTutor,
    deleteTutor,
    updateTutor
}