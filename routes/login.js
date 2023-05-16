const express = require("express");
const { get } = require("../utils/api.js");
const authenticationMiddleware = require("../middleware/authentication_middleware.js");

const router = express.Router();


router.post("/", authenticationMiddleware, async (req, res) => {
    res.status(200).send("Login successful");
});



module.exports=router;