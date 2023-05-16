const express = require("express");
const { post } = require("../utils/api.js");
const validateSchema = require("../schema/index.js");
const registerSchema = require("../schema/register_schema.js");

const router = express.Router();

router.post("/", validateSchema(registerSchema), async (req, res) => {
  const { email, password } = req.body;
  const { data } = await post("register", { email, password });
  res.send(data);
});

router.use;

module.exports = router;
