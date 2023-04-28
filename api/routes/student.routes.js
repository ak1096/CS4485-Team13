const router = require('express').Router();

//const jwt = require('jsonwebtoken');
//const bcrypt = require('bcrypt');
//const studentController = require('../controllers/student.controller.js');
// **** need to look at bri's section
//const mustBeAuthenticated = require('../middleware/check-authentication');

const Student = require('../models/student.model.js');
const {
    getStudents,
    getStudent,
    createStudent,
    deleteStudent,
    updateStudent
} = require('../controllers/student.controller.js')

// GET all students
router.get('/students', getStudents)

// GET a single student
router.get('/student/:netID', getStudent)

// POST a new student
router.post('/register', createStudent)

// DELETE a student
router.delete('/student/:netID', deleteStudent)

// UPDATE a student
router.patch('student/:id', updateStudent)

module.exports = router

// ***********************
// everything below should be in the controller file
/*
router.get("/students", (req, res) => {
    //res.json({mssg: 'GET all students'})
    Student.find({})
        .then((students) => {
            res.status(200).json({
                message: 'Fetched all students.',
                count: students.length,
                students: students
            });
        })
        .catch((error) => {
            res.status(500).json({
                message: 'Internal error.',
                error: error
            });
        });
});

router.get("/student/:netID", (req, res) => {
    //res.json({mssg: 'GET a single student'})
    //const { firstname, lastname, netID, password, classification, email } = req.body;
    
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
    //res.json(stud);
    //Student.find()
    //.then(student => res.json(student))
    //.catch(err => res.status(400).json(`Error: ${err}`))
});
*/
//**WORKS PROPERLY */
/*
// registering users
router.post("/register", async (req, res) => {
    //res.json({mssg: 'POST a new student'})

    const { firstname, lastname, netID, password, classification, email, favorites } = req.body;

    try {
        const stud = await Student.create({ firstname, lastname, netID, password, classification, email, favorites })
        res.status(200).json(stud)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
    
    // const newStud = new Student({ firstname, lastname, netID, password, classification, email });

    // newStud.save()
    // .then(() => res.json(newStud))//res.json("User addded!"))
    // .catch(err => res.status(400).json(`Error: ${err}`))
    //res.json(stud);
    // .then((docs)=>{
    //     console.log("Result :", docs);
    //     res.json(docs);
    // })
});

router.delete('/delete:netID', (req, res) => {
    //res.json({mssg: 'DELETE a single student'})
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
});

// ********* fix this
router.patch('/update:id', (req, res) => {
    //res.json({mssg: 'UPDATE a single student'})
    Student.find(req.params.netID)
        .then((mres) => {
            //Logger.addLog('book',`${req.userData.firstname} ${req.userData.lastname} updated ${req.body.title}`);
            res.status(200).json({
                message: 'Updated student.',
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

// ******* need to add student's hours, favorites, classification, password
// route for updating firstname, lastname, email
//router.put('/', mustBeAuthenticated, userController.updateDetails)

//export { router as studentRouter };
//module.exports = router;