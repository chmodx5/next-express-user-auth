import jwt from "jsonwebtoken";
import verifyRefreshToken from "../../utils/verifyRefreshToken.js";
import { refreshTokenBodyValidation } from "../../utils/requestValidationSchema.js";

const refreshTokenController = async (req, res) => {
  const { error } = refreshTokenBodyValidation(req.body);
  const privateKey = process.env.ACCESS_TOKEN_PRIVATE_KEY;
  if (error) {
    return res.status(400).json({
      status: false,
      message: error.details[0].message,
    });
  }
  verifyRefreshToken(req.body.refreshToken)
    .then(({ tokenDetails }) => {
      const payload = tokenDetails;
      console.log(payload);
      const accessToken = jwt.sign(payload, privateKey, { expiresIn: "1h" });
      return res.status(200).json({
        status: true,
        accessToken,
        message: "access token created successfully",
      });
    })
    .catch((err) => res.status(400).json(err));
  console.log("hello motto");
};
export default refreshTokenController;
