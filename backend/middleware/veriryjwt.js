import jwt from "jsonwebtoken";

const verifyjwt = async (req, res, next) => {
  const token = req.headers["authorization"];

  if (!token) {
    return res.status(401).json({
      status: false,
      message: "Unauthorized, please login to continue",
    });
  }

  jwt.verify(token, process.env.ACCESS_TOKEN_PRIVATE_KEY, (err, decoded) => {
    if (err) {
      return res.status(401).json({
        status: false,
        message: "invalid token",
      });
    } else {
      req.user = decoded;
      next();
    }
  });
};
export default verifyjwt;
