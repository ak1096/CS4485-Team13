const mongoose = require('mongoose');

const Schema = mongoose.Schema;

// PUT IN FROM OUR PREV DOCUMENTATION OUR USER MODELS
const studentSchema = new Schema({
    firstname: { type: String, required: true, trim: true },
    lastname: { type: String, required: true, trim: true },
    netID: { type: String, required: true, unique: true, trim: true, length: 9 },
    // need password constraints on frontend like email regex
    password: { type: String, required: true, trim: true, minlength: 10 },
    classification: { type: String, required: true, trim: true, minlength: 2 },
    // must contain "@--.com"
    email: { type: String, required: true, trim: true, unique: true },
    // should be a reference to tutor object id
    favorites: [{ type: String /*type: mongoose.Schema.Types.ObjectId, ref: 'Tutor'*/ }]
}, {
    timestamps: true
})

const Student = mongoose.model('Student', studentSchema);

module.exports = Student;