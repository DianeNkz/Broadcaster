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
        // password:joi.string().min(8).lowercase(1).uppercase(1).numeric(1).symbol(1).required()
          
    }

    return joi.validate(userSchema, validation);
}
//  credentials = [
//     {
    
//     email: String,
//     password: String,

//  }
// ] ;
// static validUser(credentials){
//     const validation = {
        
//         email: joi.string().required(),
//         password: joi.string().min(8).required()
          
//     }
    

//       return joi.validate(credentials,validation);
// }
//  const schema = joi.object()({
// email:joi.string().email().required(),
// password: joi.string().required()
//  });

//  const valid(schema) => {
// // const validuser ={
// //     email:joi.string().email().required(),
// //     password: joi.string().required()
// // }

// return joi.validate({},credentials,{abortEarly: false});
//  }

//}
export default validateUser  ;