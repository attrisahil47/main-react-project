const Joi = require("joi");

const signupValidation = Joi.object({
    fullName: Joi.string().required(),
    emailAddress: Joi.string().required(),
    password: Joi.string().required(),
    confirmPassword: Joi.string().required()
   
});


const loginValidation = Joi.object({
  emailAddress: Joi.string().email().required(),
  password: Joi.string().required(),
}).unknown(true); //  Allows extra fields like "remember"



module.exports = { signupValidation , loginValidation };