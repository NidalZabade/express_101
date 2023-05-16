const joi = require("joi");

const pageSchema = joi.object({
  page: joi.number().integer().min(1).max(10).default(1).optional(),

  per_page: joi.number().integer().min(1).max(10).default(6).optional(),
});

module.exports = pageSchema;
