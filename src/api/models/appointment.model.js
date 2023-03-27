const mongoose = require('mongoose');

const Schema = mongoose.Schema;

// PUT IN FROM OUR PREV DOCUMENTATION OUR USER MODELS
const appointmentSchema = new Schema({
    title: { 
        type: String, 
        required: true 
    },
    tutor: { 
        type: Schema.Types.ObjectId, 
        ref: 'tutor', 
        required: true 
    },
    student: { 
        type: Schema.Types.ObjectId, 
        ref: 'Student', 
        required: true 
    },
    startTime: {
        type: Date,
        required: true
    },
    endTime: {
        type: Date,
        required: true
    }
    /*
    // should we make this how many times it repeats or duration of each meeting
    duration: { 
        // should this be date range??
        type: Date,  
        required: true 
    }
    */
});

const Appointment =  mongoose.model('Appointment', appointmentSchema);

module.exports = Appointment;