const joi = require("joi");

const registerSchema = joi.object({
  email: joi
    .string()
    .email({ minDomainSegments: 2, tlds: { allow: ["com", "net"] } })
    .required(),
  password: joi
    .string()
    .pattern(new RegExp("^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$")) //8 characters, 1 uppercase, 1 lowercase, 1 number
    .required(),
  repeat_password: joi.ref("password"),
});

module.exports = registerSchema;
