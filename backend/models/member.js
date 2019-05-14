const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const MemberSchema = new Schema(
    {
        id: String,
        name: String,
        description: String,
    }
);

module.exports = mongoose.model("member", MemberSchema);