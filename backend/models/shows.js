const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ShowsSchema = new Schema(
  {
    id: Number,
    name: String,
    place: String,
    time: String,
    url: String,
  },
  { timestamps: true }
);

module.exports = mongoose.model("Shows", ShowsSchema);