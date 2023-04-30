const mongoose = require('mongoose');

const tutorSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  biography: { type: String },
  subjects: [{ type: String }],
  selectedDays: [{
    day: { type: String },
    startTime: { type: String },
    endTime: { type: String },
  }],
  appointments: [{
    startTime: { type: String },
    endTime: { type: String },
    eventName: { type: String },
    tutorName: { type: String }
  }],
});

const Tutor = mongoose.model('TutorTest', tutorSchema);

module.exports = Tutor;
