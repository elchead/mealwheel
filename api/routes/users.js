var express = require("express");
var router = express.Router();

const spawn = require("child_process").spawn;
const fs = require("fs");
const path = require("path");
/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("respond with a resource");
});

router.get("/recipes", function (req, res, next) {
  const pythonProcess = spawn("python", ["../run.py"]);
  pythonProcess.stdout.on("data", (data) => {
    data = data.toString();
    res.send(JSON.parse(data));
  });
});

module.exports = router;
