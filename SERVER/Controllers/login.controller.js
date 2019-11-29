import userSchema from '../Models/users';
//import  validatelogin from './validateLogin';
import bcryptjs from 'bcryptjs';
import jwt from "jsonwebtoken";
import dotenv from 'dotenv';

dotenv.config();



const login= (req,res)=> {
        const { error } = (req.body);
        if(error) {
            res.status(400).json({
                status: 400,
                error: error.details[0].message
            });
            return ;
        }
        

         let email= req.body.email;
         let password= req.body.password;
        
        const userfind = userSchema.find(userexist => userexist.email === req.body.email );
        if(!userfind){   
            res.status(400).json({
                status: 400,
                message: "wrong email"
            });
            return ;
        }
      
      const passwordcheck= bcryptjs.compareSync(req.body.password.trim(), userfind.password );

        if (!passwordcheck){
            res.status(400).json({
                status: 400,
                message: "wrong password"
            });
            return ;
        }

        const payload={
            id: userfind.id,
            email: userfind.email
        }

        const token =jwt.sign(payload,'SECRET', {expiresIn: '12hrs'});

        res.status(200).json({
            status: 200, 
            message: 'logged in successfully',
            token: token
        });

    }



export default login;