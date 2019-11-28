
import cases from '../Models/cases';
import validateCase from '../Controllers/validateCase';


/* 1-- CREATING A NEW CASE -- */

 class casefunction {
     createCase (req,res)  {
        const { error } = validateCase(req.body);

        if(error) return res.status(400).send(error.details[0].message);

        var createdOn= new Date();
        
        const id= cases.length  ;
        const casescreated={
            id,
            createdOn,
            createdBy: req.body.createdBy,
            title : req.body.title,
            type : req.body.type,
            status: req.body.status,
            location: req.body.location,
            description : req.body.description,
            attachment : req.body.attachment
        };

        cases.push(casescreated);
        res.json({
            status: 201,
            message: 'A case created successfully',
            data:cases
        });
    }


    /* 2-- GETTING ALL CASE -- */

    allCases (req,res) {
        const { error } = (req.body);
        if(error) {
            res.status(400).json({
                status: 400,
                error: error.details[0].message
            });
            return ;
        }

        res.send(cases);
    }

    /* 3-- CREATING A SPECIFIC CASE -- */

    specificCase(req,res) {
        const { error } = (req.body);
        if(error) {
            res.status(400).json({
                status: 400,
                error: error.details[0].message
            });
            return ;
        }

        let one= cases.find(item => item.id === parseInt(req.params.id));
        if(!one) {
            res.status(404).json({
                status: 404,
                message: 'The given id is not found'
            });
            
        }
        else{
            res.status(201).json(one);
            }

    }

    /* 4-- DELETING A  CASE -- */

    deleteCase(req,res) {
        const { error } = (req.body);
        if(error) {
            res.status(400).json({
                status: 400,
                error: error.details[0].message
            });
            return ;
        }

        let del= cases.find(item => item.id === parseInt(req.params.id));
        let index =cases.indexOf(del);
        if(!index) {
            res.status(401).json({
                status: 401,
                message: 'The given id is not found'
                
            });
            
        }
        else{
            cases.splice(index,1)
            res.status(201).json({
                status:201,
                message: 'a case has been deleted successfully',
                data:cases
            });
         }

    }

    /* 5-- EDITING A  CASE( @TITLE, @TYPE, @DESCRIPTION, @LOCATION) --  */

    editContent(req,res) {
        
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
          
             edit.title= req.body.title;
             edit.type= req.body.type;
             edit.description= req.body.description;
             edit.location=req.body.location;
            
            res.status(201).json({
                status:201,
                message: 'a case description has been edited successfully',
                data:cases
            });
         }

    }

 }

export default casefunction = new casefunction() ;