const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create a schema for a booking
let bookingSchema = new Schema(  {
  show: {type: Schema.Types.ObjectId, ref: 'Show'},
  user: {type: Schema.Types.ObjectId, ref: 'User'},
  bookingNr: {
    type: String,
    //required: true,
    //unique: true,
    set: v => new Date().getTime()
  }
});

// bookingSchema.pre('save', function(next) {
//   this.bookingNr = new Date().getTime();
//   next();
// });

module.exports = db.model('Booking', bookingSchema);
