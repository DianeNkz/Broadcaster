import express from 'express';
import cases from '../Models/cases';
import validateCase from '../Controllers/validateCase';


 class casefunction {
     createCase (req,res)  {
        const { error } = validateCase(req.body);

        if(error) return res.status(400).send(error.details[0].message);

        var createdOn= new Date();
        
        const id= cases.length +1 ;
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

    // updateCase(req,res) {
    //     const { error } = validateCase(req.body);

    //     if(error) return res.status(400).send(error.details[0].message);
        
    //     const casescreated= cases.find(c => c.id === parseInt(req.params.id));
    //     if(!casescreated) return res.status(404).send('The given id is not found');

    //     c.title= req.body.title;
    //     c.description = req.body.description;

    //     if(error) return res.status(400).send(error.details[0].message);

    //     res.status(200).json(
    //         {
    //             status: 200, 
    //             message: 'Article updated succesfully'
    //          });
    
    // }


    allCases (req,res){
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

 }

export default casefunction = new casefunction() ;