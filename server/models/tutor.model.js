const mongoose = require('mongoose');

// schema defines the fields for the Tutor document
const tutorSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  biography: { type: String },
  subjects: [{ type: String }],
});

const Tutor = mongoose.model('TutorData', tutorSchema);

module.exports = Tutor;
