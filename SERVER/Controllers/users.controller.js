import userSchema from '../Models/users';
import  validateUser from  '../Controllers/validateUser';
import bcryptjs from 'bcryptjs';
import dotenv from 'dotenv'

dotenv.config();

      const addUser = (req,res) =>  {
    const { error } = validateUser(req.body);
        
    if(error) return res.status(400).send(error.details[0].message);
    const userfind= userSchema.find(item => item.email === req.body.email);
     if(userfind){
        res.status(400).json({
           status:400,
           message: 'User already exists'
        });
        
      } else {
    const password= bcryptjs.hashSync(req.body.password.trim(),10);
    const id= userSchema.length;

    const userEntry = {
         id,
         firstname: req.body.firstname,
         lastname: req.body.lastname,
         email: req.body.email,
         password: password,
         repeatpassword: password
        
       
    };

    userSchema.push(userEntry);

 
    res.status(201).json({
    status: 201, 
    message: 'user created succesfully',
    data:userSchema
    
 });
      }
    } 
 

 export default  addUser;