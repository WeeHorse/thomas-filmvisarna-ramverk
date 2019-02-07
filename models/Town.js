const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create a schema for a town
let townSchema = new Schema(  {
  "name": {type: String, required: true},
  "libraries": [{type: Schema.Types.ObjectId, ref: 'Library'}]
});

module.exports = db.model('Town', townSchema);
