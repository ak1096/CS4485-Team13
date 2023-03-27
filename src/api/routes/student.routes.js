const router = require('express').Router();
const userController = require('../controllers/student.controller');
// **** need to look at bri's section
const mustBeAuthenticated = require('../middleware/check-authentication');

// ******* need to add student's hours, favorites, classification, password
// route for updating firstname, lastname, email
router.put('/', mustBeAuthenticated, userController.updateDetails)

module.exports = router;