import joi from 'joi';

const validateUser = (userSchema) => {
    const validation = {
        id: joi.number().required(),
        firstname: joi.string().required(),
        lastname: joi.string().required(),
        email: joi.string().required(),
        password:joi.string().min(8).required(),
        repeatpassword: joi.string().min(8).required()
        
    };

    return joi.validate(userSchema, validation);
};
export default validateUser;