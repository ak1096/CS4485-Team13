const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const studentSchema = new Schema({
    firstname: { type: String, required: true, trim: true },
    lastname: { type: String, required: true, trim: true },
    netID: { type: String, required: true, unique: true, trim: true, length: 9 },
    // password constraints on frontend
    password: { type: String, required: true, trim: true, minlength: 10 },
    classification: { type: String, required: true, trim: true, minlength: 2 },
    // must contain "@--.com"
    email: { type: String, required: true, trim: true, unique: true },
    favorites: [{ type: String }]
}, {
    timestamps: true
})

const Student = mongoose.model('Student', studentSchema);

module.exports = Student;