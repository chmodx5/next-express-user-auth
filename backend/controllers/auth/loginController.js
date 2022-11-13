import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import generateTokens from "../../utils/generateTokens.js";
import { loginBodyValidation } from "../../utils/requestValidationSchema.js";

const prisma = new PrismaClient();

const loginController = async (req, res) => {
  const userReq = {
    email: req.body.email,
    password: req.body.password,
  };
  const { error } = loginBodyValidation(userReq);
  if (error) {
    return res.json({
      status: "failed",
      message: error.details[0].message,
    });
  }
  const user = await prisma.user.findUnique({
    where: {
      email: req.body.email,
    },
  });

  if (user) {
    bcrypt.compare(
      req.body.password,
      user.password,
      async function (err, result) {
        if (result) {
          const { accessToken, refreshToken } = await generateTokens(user);

          return res.json({
            status: "success",
            message: "successfully logged in ",
            token: accessToken,
            refreshToken: refreshToken,
          });
        } else {
          return res.json({
            status: "error",
            message: "invalid password",
          });
        }
      }
    );
  } else {
    return res.json({
      status: "error",
      message: "user not found",
    });
  }
};
export default loginController;
