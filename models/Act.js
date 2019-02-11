const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create a schema for a band
let actSchema = new Schema(  {
  name: {type: String, required: true},
  shows: [{type: Schema.Types.ObjectId, ref: 'Show'}]
});

module.exports = db.model('Act', actSchema);
