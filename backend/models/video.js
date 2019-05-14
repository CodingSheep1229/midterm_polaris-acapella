const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const VideoSchema = new Schema(
    {
        name: String,
        url: String
    }
);

module.exports = mongoose.model("video", VideoSchema);