const mongoose = require('mongoose');

// schema defines the fields for the User document
const User = new mongoose.Schema(
    {
        firstName: { type: String, required: true },
        lastName: { type: String, required: true },
        email: { type: String, required: true, unique: true },
        password: { type: String, required: true },
        year: { type: String, required: true },
        favorites: [{ type: mongoose.Schema.Types.ObjectId, ref: 'TutorTest' }],
        appointments: [{
            startTime: { type: String },
            endTime: { type: String },
            eventName: { type: String },
            tutorName: { type: String }
        }]
    }
);

const model = mongoose.model('StudentData', User);

module.exports = model;
