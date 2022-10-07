const mongoose = require("mongoose");
const user = require("./User");

const TeethSchema = new mongoose.Schema({
  userId: { type: mongoose.Types.ObjectId, ref: "user", require: true },
  data: [
    {
      toothId: {
        type: String,
      },
      toothPart: [
        {
          partId: {
            type: String,
          },
          partState: [
            { stateName: { type: String }, state: { type: Boolean } },
          ],
        },
      ],
      toothState: [{ stateName: { type: String }, state: { type: Boolean } }],
    },
  ],
  // diagnostic: [
  //   {
  //     missing: [{ tooth_id: { type: String } }],
  //     impacted: [{ tooth_id: { type: String } }],
  //     enamel: [{ tooth_id: { type: String }, part_id: [{ type: String }] }],
  //   },
  // ],
});

module.exports = mongoose.model("teeth", TeethSchema);
