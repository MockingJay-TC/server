const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  otherName: String,
  age: Number,
  email: String,
  about: String,
  skills: [],
  title: String,
  projects: [],
  linkedin: String,
  github: String,
  hobbies: [],
});

const User = mongoose.model("user", UserSchema);
module.exports = { User };
