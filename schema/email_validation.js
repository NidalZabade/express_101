const { comparePassword } = require("../utils/hashed_password.js");
const { emails } = require("../data/emails.json");

const isValidEmail = async (email, password) => {
  const user = emails.find((user) => user.email === email);
  if (!user) {
    return false;
  }
  const isValid = await comparePassword(password, user.hashed_password);
  if (!isValid) {
    return false;
  }
  return true;
};

module.exports = isValidEmail;
