const router = require("express").Router();

// /api/routes
router.use("/robots", require("./routes"));

//if user requests API route that doesn't exist, give them a 404
router.use(function (req, res, next) {
  const err = new Error("Not found.");
  err.status = 404;
  next(err);
});

module.exports = router;
