import { PrismaClient } from "@prisma/client";
import { refreshTokenBodyValidation } from "../../utils/requestValidationSchema.js";

const prisma = new PrismaClient();

const logoutController = async (req, res) => {
  try {
    const { error } = refreshTokenBodyValidation(req.body);
    if (error) {
      return res.status(400).json({
        status: false,
        message: error.details[0].message,
      });
    }
    const userToken = await prisma.userAccessTokens.findUnique({
      where: {
        refreshToken: req.body.refreshToken,
      },
    });
    if (userToken) {
      await prisma.userAccessTokens.delete({
        where: {
          refreshToken: req.body.refreshToken,
        },
      });
      return res.status(200).json({
        status: true,
        message: "successfully logged out",
      });
    } else {
      return res.status(200).json({
        status: false,
        message: "logged out successfully",
      });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({
      status: false,
      message: "internal server error",
    });
  }
};
export default logoutController;
