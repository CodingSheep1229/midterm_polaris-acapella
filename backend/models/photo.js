const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PhotoSchema = new Schema(
    {
        id: String,
        url: String
    }
);

module.exports = mongoose.model("photo", PhotoSchema);