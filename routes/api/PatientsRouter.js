const express = require("express");
const { check, validationResult } = require("express-validator");
const router = express.Router();

const User = require("../../models/User");

router.post(
  "/",
  check("name", "Name is required").notEmpty(),
  check("email", "Please include a valid email").isEmail(),
  check("card_no", "card_no is required").notEmpty(),
  check("phone", "Phone is required").notEmpty(),
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const {
      name,
      birthday,
      card_no,
      country,
      phone,
      email,
      passport,
      employer,
      occupation,
      address1,
      address2,
      city,
      province,
      pastal,
      avatar,
      color,
    } = req.body;

    try {
      let user = await User.findOne({ email });

      if (user) {
        return res
          .status(400)
          .json({ errors: [{ msg: "User already exists" }] });
      }

      user = new User({
        name,
        birthday,
        card_no,
        country,
        phone,
        email,
        passport,
        employer,
        occupation,
        address1,
        address2,
        city,
        province,
        pastal,
        avatar,
        color,
      });

      await user.save();

      res.json("success");
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server error");
    }
  }
);

router.get("/", async (req, res) => {
  try {
    const users = await User.find({});
    res.json(users);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

module.exports = router;
