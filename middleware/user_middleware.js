const schema = require("../validations/register_schema.js");

const registration = async (req, res, next) => {
  const { value, error } = schema.validate(req.body);
  if (error) {
    return res.status(400).send(error.details[0].message);
  }
  next();
};

module.exports = registration;