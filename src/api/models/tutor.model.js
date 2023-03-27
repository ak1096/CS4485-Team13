const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const Schema = mongoose.Schema;

// PUT IN FROM OUR PREV DOCUMENTATION OUR USER MODELS
const tutorSchema = new Schema({
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
        //unique: true,
        trim: true,
        minlength: 10
    },
    classification: {
        type: String,
        required: true,
        trim: true,
        minlength: 2
    },
    // is this correct?
    topics: {
        type: Array,
        required: true,
        trim: true,
        minlength: 1
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
    skills: {
        type: Array,
        required: false
    },
    rating: {
        type: Double,
        required: true,
        unique: false,
        trim: true
    },
    // is this correct (could we use the other calendar api?)
    availableHours: { 
        type: Array,
        required: true
    }
}, {
    timestamps: true
})

tutorSchema.plugin(uniqueValidator);
const Tutor = mongoose.model('Tutor', tutorSchema);

module.exports = Tutor;