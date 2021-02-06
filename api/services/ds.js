const get_recipes = () => {
  return new Promise((resolve, reject) => {
    const spawn = require("child_process").spawn;
    const pythonProcess = spawn("python", ["../run.py"]);
    var res = "";
    pythonProcess.stdout.on("data", (data) => {
      data = data.toString();
      res += data;
    });
    pythonProcess.on("close", (code) => {
      resolve(res);
    });
    pythonProcess.on("error", (err) => {
      reject(err);
    });
  });
};

exports.get_recipes = get_recipes;
