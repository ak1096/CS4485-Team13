const router = require('express').Router();
//const jwt = require('jsonwebtoken');
//const bcrypt = require('bcrypt');
//const studentController = require('../controllers/student.controller.js');
// **** need to look at bri's section
//const mustBeAuthenticated = require('../middleware/check-authentication');

const Tutor = require('../models/tutor.model.js');;
const {
    getTutors,
    getTutor,
    createTutor,
    deleteTutor,
    updateTutor
} = require('../controllers/tutor.controller.js')

// GET all tutors
router.get('/tutors', getTutors)

// GET a single tutor
router.get('/tutor/:netID', getTutor)

// POST a new tutor
router.post('/register', createTutor)

// DELETE a tutor
router.delete('/tutor/:netID', deleteTutor)

// UPDATE a tutor
router.patch('tutor/:id', updateTutor)

module.exports = router

// ***********************
// everything below should be in the controller file
/*
router.get("/tutors", (req, res) => {
    //res.json({mssg: 'GET all Tutors'})
    Tutor.find({})
        .then((tutors) => {
            res.status(200).json({
                message: 'Fetched all tutors.',
                count: tutors.length,
                tutors: tutors
            });
        })
        .catch((error) => {
            res.status(500).json({
                message: 'Internal error.',
                error: error
            });
        });
});

router.get("/tutor/:netID", (req, res) => {
    //res.json({mssg: 'GET a single Tutor'})
    //const { firstname, lastname, netID, password, classification, email } = req.body;
    
    Tutor.find(req.params.netID)

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
    //res.json(stud);
    //Tutor.find()
    //.then(tutor => res.json(tutor))
    //.catch(err => res.status(400).json(`Error: ${err}`))
});
*/
//**WORKS PROPERLY */
/*
// registering users
router.post("/register", (req, res) => {
    //res.json({mssg: 'POST a new Tutor'})

    const { firstname, lastname, netID, password, classification, email } = req.body;

    const tut = Tutor.findOne({ email })
    const newTut = new Tutor({ firstname, lastname, netID, password, classification, email });

    newTut.save()
    .then(() => res.json(newTut))//res.json("User addded!"))
    .catch(err => res.status(400).json(`Error: ${err}`))
    //res.json(tut);
    // .then((docs)=>{
    //     console.log("Result :", docs);
    //     res.json(docs);
    // })
});

router.delete('/delete/:netID', (req, res) => {
    res.json({mssg: 'DELETE a single Tutor'})

});

// ********* fix this
router.patch('/update/:netID', (req, res) => {
    //res.json({mssg: 'UPDATE a single Tutor'})
    Tutor.find(req.params.netID)
        .then((mres) => {
            //Logger.addLog('book',`${req.userData.firstname} ${req.userData.lastname} updated ${req.body.title}`);
            res.status(200).json({
                message: 'Updated book.',
                book: mres
            });
        })
        .catch((error) => {
            res.status(500).json({
                message: 'Internal error',
                error: error
            })
        });
});
*/

//router.post("/login");


// ******* need to add tutor's hours, skills, classes, classification, password
// route for updating firstname, lastname, email
//router.put('/', mustBeAuthenticated, userController.updateDetails)

//module.exports = router;