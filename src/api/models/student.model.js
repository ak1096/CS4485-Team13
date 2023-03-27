const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const Schema = mongoose.Schema;

// PUT IN FROM OUR PREV DOCUMENTATION OUR USER MODELS
const studentSchema = new Schema({
    // username property with constraints
    firstName: {
        type: String,
        required: true,
        trim: true
    },
    lastName: {
        type: String,
        required: true,
        trim: true
    },
    netID: {
        type: String,
        required: true,
        //unique: true,
        trim: true,
        length: 9
    },
    password: {
        type: String,
        required: true,
        trim: true,
        minlength: 10
    },
    classification: {
        type: String,
        required: true,
        trim: true,
        minlength: 2
    },
    email: {
        type: String,
        required: true,
        //unique: true,
        trim: true,
        minlength: 3,
        // must contain "@--.com"
    },
    // is this correct?
    favorites: {
        type: Array,
        required: false
    }
}, {
    timestamps: true
})

studentSchema.plugin(uniqueValidator);
const Student = mongoose.model('Student', studentSchema);

module.exports = Student;