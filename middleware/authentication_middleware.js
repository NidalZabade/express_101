const { verifyToken } = require("../utils/token.js");

const authenticationMiddleware = async (req, res, next) => {
  const token = req.headers.authorization;
  try {

  if (!token) {
    throw new Error("No token provided");
  }
    const payload = await verifyToken(token);
    req.user = payload;
    next();
  } catch (err) {
    res.status(401).send("Unauthorized");
  }
};

module.exports = authenticationMiddleware;
