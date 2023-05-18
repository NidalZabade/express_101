const { emails } = require("../data/emails.json");

const checkAdmin = (req, res, next) => {
  const { email } = req.user;
  const user = emails.find((user) => user.email === email);
  if (user && user.roles?.includes("admin")) {
    console.log("User is admin");
    next();
  } else {
    res.status(401).send("Unauthorized");
  }
};

module.exports = checkAdmin;
