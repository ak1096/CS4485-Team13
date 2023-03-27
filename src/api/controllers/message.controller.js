const User = require('../models/message.model');

// **********************
// change attributes to match the student attributes
module.exports.updateDetails = (req, res) => {
    // change this to student and such
	const id = req.userData.userId;
    const email = req.userData.email;
    const firstname = req.userData.firstname;
    const lastname = req.userData.lastname;

    if (!req.body.email && !req.body.firstname && !req.body.lastname) {
        return res.status(400).json({
            error: 'Bad request.'
        });
    }

    const newEmail = req.body.email || email;
    const newFirstname = req.body.firstname || firstname;
    const newLastname = req.body.lastname || lastname;

    User.updateOne({ _id:id }, { email: newEmail, firstname: newFirstname, lastname: newLastname })
        .then((result) => {
            console.log(result);
            res.status(200).json({
                message: 'Updated user details.',
                result: result
            });
        })
        .catch((error) => {
            res.status(500).json({
                message: 'Failed to update user details.',
                error: error
            });
        });
};