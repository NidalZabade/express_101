const joi = require("joi");

const schema = joi
  .object({
    page: joi.number().integer().min(1).default(1).optional(),

    per_page: joi.number().integer().min(1).default(6).optional(),
  });

module.exports = schema;
