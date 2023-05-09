const express = require("express");
const schema = require("../validations/user_schema.js");
const { get } = require("../utils/api.js");

const router = express.Router();

router.get("/", async (req, res) => {
  const { value, error } = schema.validate(req.query);
  if (error) {
    return res.status(400).send(error.details[0].message);
  }
  const { page, per_page } = value;
  console.log(`page: ${page}, per_page: ${per_page}`);
  const { data } = await get(`users?page=${page}&per_page=${per_page}`);
  res.send(data);
});

module.exports = router;
