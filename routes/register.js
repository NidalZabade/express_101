const express = require("express");
const { post } = require("../utils/api.js");


const router = express.Router();

//enter the route for register here email and password
router.post("/", async (req, res) => {
  const { email, password } = req.body;
  const { data } = await post("register", { email, password });
  res.send(data);
});

//validate the email and password then send the data to the api (middleware)

router.use

module.exports = router;
