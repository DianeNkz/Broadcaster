//const express= from('express');
import userSchema from '../Models/users';
import  validateUser from  '../Controllers/validateUser';
import jwt from 'jsonwebtoken';



      const addUser = (req,res) =>  {
    const { error } = validateUser(req.body);
        
    if(error) return res.status(400).send(error.details[0].message);

    // const userexist= ;
    const id= userSchema.length+1;

    const userEntry = {
         id,
         firstname: req.body.firstname,
         lastname: req.body.lastname,
         email: req.body.email,
         password: req.body.password,
         repeatpassword: req.body.repeatpassword
        
       
    };

    userSchema.push(userEntry);

    res.status(201).json({
    status: 201, 
    message: 'user created succesfully',
    //'UserIdentification':userSchema
 });
    
    } 
 

 export default  addUser;