const router = require('express').Router();
// const jwt = require('jsonwebtoken');
// const bcrypt = require('bcrypt');
//const studentController = require('../controllers/student.controller.js');
//const mustBeAuthenticated = require('../middleware/check-authentication');

const Student = require('../models/student.model.js');
const Tutor = require('../models/tutor.model.js');

const {
    loginUser
} = require('../controllers/login.controller.js')

// login student or tutor 
router.post('/', loginUser)

module.exports = router

/**
 * logging in a new user should happen before we know if they are a tutor or student
 * only when we are creating a new user do we need to separate the two
 * that's why it will be /login for the sign in page and then 
 * if we need to create a new user it will go to either:
 * /s-auth/register OR /t-auth/register
 */