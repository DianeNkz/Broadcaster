import cases from '../Models/cases';
import userSchema from '../Models/users';
import  validateUser from  '../Controllers/validateUser';





 class manageAll {

    /* 1-- CREATING A NEW USER -- */

     addUser (req,res)   {
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
        const id= userSchema.length+1;
    
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



 

    /* 2-- UPDATING  STATUS --  */

    editStatus(req,res) {
        
        const { error } = (req.body);

        if(error) {
            res.status(400).json({
                status: 400,
                error: error.details[0].message
            });
            return ;
        }
        const edit= cases.find(item => item.id === parseInt(req.params.id));
        
        if(!edit ) {
            res.status(404).json({
                status: 401,
                message: 'The given id is not found'  
            });
            
        }
        else{
          
             edit.status=req.body.status;
            
            res.status(201).json({
                status:201,
                message: 'status has been updated successfully',
                data:cases
            });
         }

    }
 

 }

export default manageAll = new manageAll() ;