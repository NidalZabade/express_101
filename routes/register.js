const express = require("express");
const { post } = require("../utils/api.js");
const validateSchema = require("../schemas/index.js");
const registerSchema = require("../schemas/register_schema.js");

const router = express.Router();

//enter the route for register here email and password
router.post("/", validateSchema(registerSchema), async (req, res) => {
  const { email, password } = req.body;
  const { data } = await post("register", { email, password });
  res.send(data);
});

router.use;

module.exports = router;
