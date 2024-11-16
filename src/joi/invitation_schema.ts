import Joi from "joi";

const InvitationSchema = Joi.object({
    email: Joi.string().email(),
});

const InvitationDecisionSchema = Joi.object({
    id: Joi.string().required(),
});

export {
    InvitationSchema,
    InvitationDecisionSchema
}