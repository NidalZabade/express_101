const express = require("express");
const { get } = require("../utils/api.js");
const pageSchema = require("../schemas/page_schema.js");
const validateSchema = require("../schemas/index.js");

const router = express.Router();

// GET /users validates the query parameters using the pageSchema
// and then calls the get function from the api.js file.

router.get("/", validateSchema(pageSchema), async (req, res) => {
  const { page, per_page } = req.query;
  const { data } = await get(`users?page=${page}&per_page=${per_page}`);
  res.send(data);
});

module.exports = router;
