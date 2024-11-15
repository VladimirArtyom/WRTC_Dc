import Joi from "joi"

const loginSchema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().min(6).max(10).required(),
});

const registerSchema = Joi.object({
    username: Joi.string().min(3).max(12).required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(6).max(10).required(),
});

export {
    loginSchema,
    registerSchema
}