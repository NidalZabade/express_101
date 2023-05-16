const Joi = require("joi");

const validateSchema = (schema) => {
  return async (req, res, next) => {
    try {
      await schema.validateAsync(req.query);
      next();
    } catch (error) {
      res.status(400).send(error.message);
    }
  };
};

module.exports = validateSchema;
