const mongoose = require('mongoose');

const Schema = mongoose.Schema;

// PUT IN FROM OUR PREV DOCUMENTATION OUR USER MODELS
const messageSchema = new Schema({
    body: { type: String, required: true },
    sender: { type: Schema.Types.ObjectId, required: true },
    recipient: { type: Schema.Types.ObjectId, required: true },
    timeSent: { type: Date, required: true }
});

const Message =  mongoose.model('Message', messageSchema);

module.exports = Message;
