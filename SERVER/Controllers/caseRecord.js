import express from 'express';
import cases from '../Models/cases';


 class casefunction {
     createCase (req,res)  {
        const { error } = (req.body);

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
        });
    }



 }

export default casefunction = new casefunction() ;