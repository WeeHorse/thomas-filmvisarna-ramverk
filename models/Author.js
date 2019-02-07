const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create a schema for an author
let authorSchema = new Schema(  {
  "name": {type: String, required: true},
  "description": String,
  "books": [{type: Schema.Types.ObjectId, ref: 'Book'}]
});

module.exports = db.model('Author', authorSchema);
