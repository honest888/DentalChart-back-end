const mongoose = require("mongoose");
const teeth = require("./Teeth");
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
  phone: [
    {
      type: String,
    },
  ],
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
  guarantor: {
    type: String,
  },
  group: [
    {
      type: String,
    },
  ],
});

module.exports = mongoose.model("user", UserSchema);
