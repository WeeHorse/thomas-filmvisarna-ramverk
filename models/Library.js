const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create a schema for an library
let librarySchema = new Schema(  {
  "name": {type: String, required: true},
  "street": String,
  "zipCode": String,
  "town": {type: Schema.Types.ObjectId, ref: 'Town'},
  "books": [{type: Schema.Types.ObjectId, ref: 'Book'}]
});

module.exports = db.model('Library', librarySchema);
