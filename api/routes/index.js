var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

const ds = require("../services/ds");
router.get("/recipes", function (req, res, next) {
  ds.get_recipes((r) => {
    res.send(r);
  });
});
module.exports = router;
