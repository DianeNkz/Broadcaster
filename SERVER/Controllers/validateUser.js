import joi from '@hapi/joi';
//import PasswordComplexity from 'joi-password-complexity'; 


//  class usersvalidation{
   const  validateUser = (userSchema) => {
    const validation = {
        
        firstname: joi.string().min(3).required(),
        lastname: joi.string().min(3).required(),
        phone:joi.string().required(),
        email: joi.string().required(),
        password: joi.string().min(8).required()
        
          
    }

    return joi.validate(userSchema, validation);
}

export default validateUser  ;