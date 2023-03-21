const mongoose = require('mongoose');

const Schema = mongoose.Schema;

// PUT IN FROM OUR PREV DOCUMENTATION OUR USER MODELS
const tutorSchema = new Schema({
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
    // is this correct?
    topics: {
        type: Array,
        required: true,
        unique: false,
        trim: true,
        minlength: 1
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
    skills: {
        type: Array,
        required: false,
        unique: false
    },
    rating: {
        type: Double,
        required: true,
        unique: false,
        trim: true
    },
}, {
    timestamps: true
})

const Tutor = mongoose.model('Tutor', tutorSchema);

module.exports = Tutor;