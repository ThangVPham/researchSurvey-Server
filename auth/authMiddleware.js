const jwt = require("jsonwebtoken");
const User = require("../Model/userModel");
require("dotenv").config();

const authenticate = async (req, res, next) => {
  let token = "";

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      token = req.headers.authorization.split(" ")[1];

      const decodedToken = jwt.verify(token, process.env.JWT_SECRET);

      req.user = await User.findById(decodedToken.id).select("_id");
      next();
    } catch (e) {
      console.log(e);
    }
  } else {
    res.status(401).json({ message: "Not Authorized" });
  }
};

module.exports = { authenticate };
