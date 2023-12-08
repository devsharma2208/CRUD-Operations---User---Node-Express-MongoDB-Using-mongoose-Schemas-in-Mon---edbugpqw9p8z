const mongoose = require('mongoose');

// Define the user schema
const userSchema = new mongoose.Schema({
  // Implement the user schema fields:
  // name as String and
  // email as a String,
  name : String,
  email : String,
});
const User = mongoose.model('user', userSchema);
module.export = User;
// Create and export the User model
