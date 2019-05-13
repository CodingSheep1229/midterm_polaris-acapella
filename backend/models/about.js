const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const AboutSchema = new Schema(
    {
        id: String,
        content: String
    }
);

module.exports = mongoose.model("about", AboutSchema);