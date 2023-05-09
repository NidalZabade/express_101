const express = require("express");
const { get } = require("../utils/api.js");

const router = express.Router();

router.get("/", async (req, res) => {
  const { data } = await get("/users");
  res.send(data);
});

module.exports = router;
