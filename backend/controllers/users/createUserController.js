import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";
import { createUserBodyValidation } from "../../utils/requestValidationSchema.js";

const prisma = new PrismaClient();

const createUserController = async (req, res) => {
  // check if the password and confirm password match
  if (req.body.password != req.body.confirm_password) {
    return res.json({
      status: "failed",
      message: "passwords dont match",
    });
  }

  //storing the new user data in an object
  const newUser = {
    username: req.body.username,
    email: req.body.email,
    password: req.body.password,
  };

  //validating the newUser Object

  const { error } = createUserBodyValidation(newUser);

  if (error) {
    return res.json({
      status: "failed",
      message: error.details[0].message,
    });
  }

  //check if the username and email are in the database
  const checkIfUserNameIsInDatabase = await prisma.user.findUnique({
    where: {
      username: newUser.username,
    },
  });
  const checkIfEmailIsInDatabase = await prisma.user.findUnique({
    where: {
      email: newUser.email,
    },
  });

  if (checkIfUserNameIsInDatabase) {
    return res.json({
      status: "error",
      message: "the username already exists please pick another",
    });
  } else if (checkIfEmailIsInDatabase) {
    return res.json({
      status: "error",
      message: "the username already exists please pick another",
    });
  } else {
    //hashing the password
    bcrypt.genSalt(10, async (err, salt) => {
      bcrypt.hash(newUser.password, salt, async function (err, hash) {
        // Store user with the  hashed in the database
        await prisma.user
          .create({
            data: {
              username: newUser.username,
              email: newUser.email,
              password: hash,
            },
          })
          .then((result) => {
            return res.json({
              status: "success",
              message: "user created successfully",
              data: result,
            });
          });
      });
    });
  }
};

export default createUserController;
