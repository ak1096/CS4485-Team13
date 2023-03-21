const mongoose = require('mongoose');

const Schema = mongoose.Schema;

// PUT IN FROM OUR PREV DOCUMENTATION OUR USER MODELS
const studentSchema = new Schema({
    // username property with constraints
    name: {
        type: String,
        required: true,
        unique: false,
        trim: true,
        minlength: 3
    },
    netID: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        length: 9
    },
    password: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        minlength: 10
    },
    classification: {
        type: String,
        required: true,
        unique: false,
        trim: true,
        minlength: 2
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        minlength: 3,
        // must contain "@--.com"
    },
    // is this correct?
    favorites: {
        type: Array,
        required: false,
        unique: false
    }
}, {
    timestamps: true
})

const Student = mongoose.model('Student', studentSchema);

module.exports = Student;