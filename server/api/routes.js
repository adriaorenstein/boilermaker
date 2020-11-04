// /api/routes
const router = require("express").Router();
const { Robot } = require("../db");

router.get("/", async (req, res, next) => {
  //get request here
  try {
    const robots = await Robot.findAll();
    res.json(robots);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
