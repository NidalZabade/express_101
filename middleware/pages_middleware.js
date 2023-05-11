const schema = require("../validations/user_schema.js");

const validatePage = (req, res, next) => {
  const { value, error } = schema.validate(req.query);
  if (error) {
    return res.status(400).send(error.details[0].message);
  }
  req.query = value;
  next();
};

module.exports = validatePage;
