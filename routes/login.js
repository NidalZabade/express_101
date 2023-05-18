const express = require("express");
const { post } = require("../utils/api.js");
const isValidEmail = require("../schema/email_validation.js");
const { generateToken } = require("../utils/token.js");

const router = express.Router();

router.post("/", async (req, res) => {
  if (await isValidEmail(req.body.email, req.body.password)) {
    const token = generateToken({ email: req.body.email });
    res.status(200).send({ token });
  } else {
    res.status(401).send("Invalid email or password");
  }
});

module.exports = router;
