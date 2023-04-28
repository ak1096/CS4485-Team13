const mongoose = require('mongoose');

const Schema = mongoose.Schema;

// PUT IN FROM OUR PREV DOCUMENTATION OUR USER MODELS
const tutorSchema = new Schema({
    firstname: { type: String, required: true, trim: true },
    lastname: { type: String, required: true, trim: true },
    netID: { type: String, required: true, unique: true, trim: true, length: 9 },
    // need password constraints on frontend like email regex
    password: { type: String, required: true, trim: true, minlength: 10 },
    classification: { type: String, required: true, trim: true, minlength: 2 },
    // must contain "@--.com"
    email: { type: String, required: true, trim: true, unique: true },
    biography: { type: String },
    topics: [{
        type: String /*type: mongoose.Schema.Types.ObjectId, ref: 'Class'*/
    }],
    // needs a skills/topics schema potentially (would have to figure out how to populate w/ utd classes)
    skills: [{
        type: String
    }],
    rating: { type: Number, required: true, trim: true },
    availablehours: [{ day: { type: String }, startTime: { type: String }, endTime: { type: String } }],
}, {
    timestamps: true
})

const Tutor = mongoose.model('Tutor', tutorSchema);

module.exports = Tutor;