const bcrypt = require('bcrypt');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create a schema for a town
let userSchema = new Schema(  {
  email: {type: String, required: true, unique: true},
  password: {type: String, required: true}
});

// pre save let's us replace/changed data
// before we save a document
userSchema.pre('save', async function(){
  // here we replace the password with the encrypted password
  this.password = await bcrypt.hash(this.password + passwordSalt, 10);
});

module.exports = db.model('User', userSchema);
