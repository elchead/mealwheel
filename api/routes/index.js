var express = require("express");
var router = express.Router();

const spawn = require("child_process").spawn;
const fs = require("fs");
const path = require("path");

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

router.get("/recipes", function (req, res, next) {
  const pythonProcess = spawn("python", ["../../run.py"]);
  pythonProcess.stdout.on("data", (data) => {
    console.log(data);
    console.log("Hi");
  });
  res.json(data);
});

module.exports = router;
