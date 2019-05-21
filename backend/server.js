const mongoose = require("mongoose");
const express = require("express");
var cors = require("cors");
const bodyParser = require("body-parser");
const logger = require("morgan");
const Shows = require("./models/shows");
const Video = require('./models/video');
const Member = require('./models/member');
const Photo = require('./models/photo');
var path = require('path');

const API_PORT = process.env.PORT || 3001;
const app = express();
app.use(cors());
app.use(express.static(path.join(__dirname, "../client/build")));
const router = express.Router();

// this is our MongoDB database
const dbRoute = "mongodb+srv://sheeeeeeeep:1129588@polaris-kngem.azure.mongodb.net/Users?retryWrites=true";

// connects our back end code with the database
mongoose.connect(
  dbRoute,
  { useNewUrlParser: true }
);

let db = mongoose.connection;

db.once("open", () => {
    console.log('db open!!!');
});

// checks if connection with the database is successful
db.on("error", console.error.bind(console, "MongoDB connection error:"));

// (optional) only made for logging and
// bodyParser, parses the request body to be a readable json format
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(logger("dev"));

router.get("/getShows", (req, res) => {
    Shows.find((err, data) => {
        if (err) return res.json({ success: false, error: err });
        return res.json({ success: true, data: data });
    });
});

router.get("/getVideos", (req, res) => {
    Video.find((err, data) => {
        if (err) return res.json({ success: false, error: err });
        return res.json({ success: true, data: data });
    });
});

router.get("/getMembers", (req, res) => {
    Member.find((err, data) => {
        if (err) return res.json({ success: false, error: err });
        return res.json({ success: true, data: data });
    });
});

router.get("/getPhotos", (req, res) => {
    Photo.find((err, data) => {
        if (err) return res.json({ success: false, error: err });
        return res.json({ success: true, data: data });
    });
});

// append /api for our http requests
app.use("/api", router);

// launch our backend into a port
app.listen(API_PORT, () => console.log(`LISTENING ON PORT ${API_PORT}`));
