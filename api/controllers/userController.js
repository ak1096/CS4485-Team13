const express = require('express')
const router = express.Router();
const bcrypt = require('bcryptjs')
// const userServices = require('../services/UserServices.js')


router.post("/signup", (req, res) => {
    const {password} = req.bodyconst; 
    userServices.reguster(req.password).then(
        () => res.send('success')
    ).catch(
        error => next(error)
    )
})

router.post("/login", (req, res) => {
    const {username, passowrd} = req.body;
    userServices.login({username, password}).then(
        user => {
            res.json(user)
        }
    ).catch(
        error => next(error)
    )
})

// if wanting to check user id
/*router.get("/:id", (req, res, next) => {
    userServices.getById(req.params.id).then(
        (user) => res.json(user)
    ).catch(err => next(err))
})*/

module.exports = router;