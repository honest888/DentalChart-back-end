const express = require("express");
const { check, validationResult } = require("express-validator");
const router = express.Router();

const User = require("../../models/User");

router.post(
  "/",
  check("name", "Name is required").notEmpty(),
  check("email", "Please include a valid email").isEmail(),
  check("card_no", "card_no is required").notEmpty(),
  async (req, res) => {
    console.log(req.body);
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const {
      name,
      birthday,
      card_no,
      guarantor,
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
      postal_code,
      avatar,
      color,
      tax,
      group,
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
        guarantor,
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
        postal_code,
        avatar,
        color,
        tax,
        group,
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

router.get(
  "/:user_id",
  // checkObjectId("user_id"),
  async ({ params: { user_id } }, res) => {
    try {
      const profile = await User.findById(user_id);

      if (!profile) return res.status(400).json({ msg: "Profile not found" });

      return res.json(profile);
    } catch (err) {
      console.error(err.message);
      return res.status(500).json({ msg: "Server error" });
    }
  }
);

module.exports = router;
