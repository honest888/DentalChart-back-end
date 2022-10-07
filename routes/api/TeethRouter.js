const express = require("express");
const { check, validationResult } = require("express-validator");
const router = express.Router();

const Teeth = require("../../models/Teeth");
const User = require("../../models/User");
router.post(
  "/",
  //   check("userId", "UserId is required").notEmpty(),
  async (req, res) => {
    console.log(req.body);
    // const errors = validationResult(req);
    // if (!errors.isEmpty()) {
    //   return res.status(400).json({ errors: errors.array() });
    // }
    const { userID, data } = req.body;

    try {
      const teethData = await Teeth.findOne({ userID });
      if (teethData) {
        teethData.data = data;
        await teethData.save();
        res.json("success");
      } else {
        teethData = new Teeth({ userID, data });
        await teethData.save();
        res.json("success");
      }
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server error");
    }
  }
);

router.get("/:user_id", async ({ params: { user_id } }, res) => {
  try {
    const teeth = await Teeth.findOne({ user_id });
    if (!teeth) return res.status(400).json({ msg: "Teeth not found" });
    return res.json(teeth);
  } catch (err) {
    console.error(err.message);
    return res.status(500).json({ msg: "Server error" });
  }
});

module.exports = router;
