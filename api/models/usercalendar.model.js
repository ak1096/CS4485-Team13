const mongoose = require('mongoose');

const Schema = mongoose.Schema;

// kidding lmao wait for nithyaa to figure out her part
const appointmentSchema = new Schema({
  title: { 
      type: String, 
      required: true 
  },
  tutor: { 
      type: Schema.Types.ObjectId, 
      ref: 'Tutor', 
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

const calendarEntrySchema = new Schema({

});

// const contentSchema = mongoose.Schema({
//     item: appointmentSchema,
//     quantity: { type: Number, required: true }
// });

// const orderSchema = mongoose.Schema({
//     creator: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
//     contents: [contentsSchema],
//     sendTo: { type: String, required: true },
//     addrLine1: { type: String, required: true },
//     addrLine2: { type: String, required: false, default: '' },
//     city: { type: String, required: true },
//     state: { type: String, required: true },
//     zip: { type: Number, required: true },
//     cardType: { type: Number, required: true },
//     last4CardDigits: { type: Number, required: true },
//     status: { type: Number, required: true },
//     shippingPrice: { type: Number, required: true },
//     subtotal: { type: Number, required: true },
//     tax: { type: Number, required: true },
//     totalPrice: { type: Number, required: true },
//     timestamp: { type: String, required: true }
// });

const Calendar = mongoose.model('Calendar', calendarSchema);

module.exports = Calendar;