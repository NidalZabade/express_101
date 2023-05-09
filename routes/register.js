const express = require("express");
const schema = require("../validations/user_schema.js");
const { post } = require("../utils/api.js");

const router = express.Router();

//enter the route for register here email and password
router.post("/", async (req, res) => {
  console.log(req.body);
  const { value, error } = schema.validate(req.body);
  if (error) {
    return res.status(400).send(error.details[0].message);
  }
  const { email, password } = value;
  console.log(`email: ${email}, password: ${password}`);
  const { data } = await post("register", { email, password });
  res.send(data);
});

module.exports = router;
