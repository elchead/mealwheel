const spawn = require("child_process").spawn;
const fs = require("fs");
const path = require("path");

const get_recipes = (callback) => {
  const pythonProcess = spawn("python", ["../run.py"]);
  var res = "";
  pythonProcess.stdout.on("data", (data) => {
    data = data.toString();
    console.log(JSON.parse(data));
    res += data;
  });
  pythonProcess.on("close", function (code) {
    return callback(res);
  });
};

exports.get_recipes = get_recipes;
