import jwt from "jsonwebtoken";
import dotenv from 'dotenv';


dotenv.config();

const auth = (req, res, next) => {


    const token= req.headers['your-token'];
    if(!token) {
        return res.status(400).json({
            status:400,
            message:'Access denied'
        });
    } else {
        next();
    }

    try {
        const verified= jwt.verify(token, process.env.SECRET);
        req.id = verified;
        
        //next();
    } 
      catch(error){
          return res.status(401).json({
              status:401,
              message: 'invalid token',
              
          });
      }
      
    };

export default auth;