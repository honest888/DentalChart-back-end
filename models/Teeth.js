const mongoose = require("mongoose");
const TeethSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
  },
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
