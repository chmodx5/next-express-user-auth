import { PrismaClient } from "@prisma/client";
import jwt from "jsonwebtoken";

const prisma = new PrismaClient();

const verifyRefreshToken = async (refreshToken) => {
  const privateKey = process.env.REFRESH_TOKEN_PRIVATE_KEY;

  return new Promise(async (resolve, reject) => {
    const tokenFromDb = await prisma.userAccessTokens.findUnique({
      where: {
        refreshToken: refreshToken,
      },
    });
    if (tokenFromDb) {
      jwt.verify(refreshToken, privateKey, (err, tokenDetails) => {
        if (err) {
          return reject({
            status: false,
            message: "invalid refresh token",
          });
        }
        resolve({
          tokenDetails,
          status: true,
          message: "valid refresh token",
        });
      });
    } else {
      return reject({
        status: false,
        message: "invalid refresh token",
      });
    }
  });
};
export default verifyRefreshToken;
