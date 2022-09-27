const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  birthday: {
    type: Date,
  },
  card_no: {
    type: String,
    required: true,
  },
  country: {
    type: String,
  },
  phone: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  passport: {
    type: String,
  },
  employer: {
    type: String,
  },
  occupation: {
    type: String,
  },
  address1: {
    type: String,
  },
  address2: {
    type: String,
  },
  city: {
    type: String,
  },
  province: {
    type: String,
  },
  pastal: {
    type: String,
  },
  avatar: {
    type: String,
  },
  color: {
    type: String,
  },
});

module.exports = mongoose.model("user", UserSchema);
