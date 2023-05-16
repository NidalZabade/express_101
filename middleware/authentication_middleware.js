const { comparePassword } = require("../utils/hashed_password.js");
const emails = require("../data/emails.json");

const authenticationMiddleware = async (req, res, next) => {
  const { email, password } = req.body;
  const user = emails.emails.find((user) => user.email === email);
  if (!user) {
    return res.status(401).send("Invalid email");
  }
  const isPasswordCorrect = await comparePassword(
    password,
    user.hashed_password
  );
  if (!isPasswordCorrect) {
    return res.status(401).send("Invalid password");
  }
  next();
};

module.exports = authenticationMiddleware;
