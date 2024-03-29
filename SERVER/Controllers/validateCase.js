import joi from 'joi';



const validateCase= (cases) => {
    const validation = {
        
        createdOn: joi.date(),
        createdBy: joi.number().required(),
        title : joi.string().required(),
        type : joi.string().required(),
        status: joi.string(),
        location: joi.string().required(),
        description : joi.string().required(),
        attachment : joi.string().required(),
    };

    return joi.validate(cases, validation);
};
export default validateCase;