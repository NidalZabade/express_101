const bcrypt = require("bcrypt");
const saltRounds = 10;


const hashPassword= (password) => {
  return bcrypt.hash(password, saltRounds);
};

const  comparePassword = async (password, hashedPassword) => {
  return bcrypt.compare(password, hashedPassword);
};


module.exports = {
  hashPassword,
  comparePassword,
};


