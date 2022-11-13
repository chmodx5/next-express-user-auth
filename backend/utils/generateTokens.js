import jwt from "jsonwebtoken";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
const generateTokens = async (user) => {
  try {
    const payload = user;
    const accessToken = jwt.sign(
      payload,
      process.env.ACCESS_TOKEN_PRIVATE_KEY,
      { expiresIn: "1h" }
    );
    console.log(accessToken);
    const refreshToken = jwt.sign(
      payload,
      process.env.REFRESH_TOKEN_PRIVATE_KEY,
      { expiresIn: "30d" }
    );

    const userAccessTokens = await prisma.userAccessTokens.findMany({
      where: {
        userId: user.id,
      },
    });

    if (userAccessTokens.length > 0)
      await prisma.userAccessTokens.deleteMany({
        where: {
          userId: user.id,
        },
      });

    await prisma.userAccessTokens.create({
      data: {
        userId: user.id,
        token: accessToken,
        refreshToken: refreshToken,
      },
    });
    return Promise.resolve({ accessToken, refreshToken });
  } catch (error) {
    return Promise.reject(error);
  }
};
export default generateTokens;
