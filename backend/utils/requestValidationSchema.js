import Joi from "joi";
import passwordComplexity from "joi-password-complexity";

const createUserBodyValidation = (body) => {
  const schema = Joi.object({
    username: Joi.string().required().label("username"),
    email: Joi.string().email().required().label("email"),
    password: passwordComplexity().required().label("password"),
  });
  return schema.validate(body);
};
const loginBodyValidation = (body) => {
  const schema = Joi.object({
    email: Joi.string().email().required().label("email"),
    password: Joi.string().required().label("password"),
  });
  return schema.validate(body);
};
const refreshTokenBodyValidation = (body) => {
  const schema = Joi.object({
    refreshToken: Joi.string().required().label("refresh token"),
  });
  return schema.validate(body);
};

export {
  createUserBodyValidation,
  loginBodyValidation,
  refreshTokenBodyValidation,
};
