const express = require("express");
const { get, post } = require("../utils/api.js");
const pageSchema = require("../schema/page_schema.js");
const validateSchema = require("../schema/index.js");
const authenticationMiddleware = require("../middleware/authentication_middleware.js");
const checkAdmin = require("../middleware/admin_middleware.js");

const router = express.Router();

router.use(authenticationMiddleware);

router.get("/", validateSchema(pageSchema), async (req, res) => {
  const { page, per_page } = req.query;
  const { data } = await get(`users?page=${page}&per_page=${per_page}`);
  res.send(data);
});

router.post("/", checkAdmin, async (req, res) => {
  const { data } = await post("users", req.body);
  res.send(data);
});

module.exports = router;
