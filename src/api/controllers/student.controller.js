const bcrypt = require('bcrypt')
const User = require('../models/student.model.js')

module.exports = {
	async store(req, res) {
		try {
			const { email, firstName, lastName, password } = req.body
			const existentStudent = await Student.findOne({ email })

			if (!existentStudent) {
				const hashPassword = await bcrypt.hash(password, 10)
				const student = await Student.create({
					email,
					firstName,
					lastName,
					password: hashPassword,
				})
				return res.json(student)
			}
			return res.status(400).json({
				message:
          'email already exists!  do you want to login instead? ',
			})
		} catch (err) {
			throw Error(`Error while Registering new user :  ${err}`)
		}
	},
}

// just use this as a referneece this isn't what we'll actually do for the api