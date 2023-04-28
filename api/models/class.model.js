const mongoose = require('mongoose');

const Schema = mongoose.Schema;

// PUT IN FROM OUR PREV DOCUMENTATION OUR USER MODELS
const classSchema = new Schema({
    prefix: { type: String, required: true },
    classNumber: { type: String, required: true },
    description: { type: String, required: true }
});

const Class =  mongoose.model('Class', classSchema);

module.exports = Class;