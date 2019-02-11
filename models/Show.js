const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// A subdocument schema for a section with a certain capacity
// https://mongoosejs.com/docs/subdocs.html
let sectionSchema = new Schema({
  name: {type: String, required: true},
  totalCapacity: {type: Number, required: true},
  bookedCapacity: {type: Number, default: 0}
});

// A schema for a show
let showSchema = new Schema({
  act: {type: Schema.Types.ObjectId, ref: 'Act'},
  venue: {type: String, required: true},
  address: {type: String, required: true},
  sections:[sectionSchema],
  date: {
    type: Number,
    required: true,
    set: d => new Date(d).getTime()
  }
});

// 2. Create the model and export it
module.exports = db.model('Show', showSchema);
