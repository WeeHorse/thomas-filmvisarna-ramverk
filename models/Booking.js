const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create a schema for a booking
let bookingSchema = new Schema(  {
  show: {type: Schema.Types.ObjectId, ref: 'Show'},
  user: {type: Schema.Types.ObjectId, ref: 'User'}
});

module.exports = db.model('Booking', bookingSchema);
