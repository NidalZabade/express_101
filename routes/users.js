const express = require("express");
const { get } = require("../utils/api.js");

const router = express.Router();

router.get("/", async (req, res) => {
  const { page, per_page } = req.query;
  const { data } = await get(`users?page=${page}&per_page=${per_page}`);
  res.send(data);
});

module.exports = router;
