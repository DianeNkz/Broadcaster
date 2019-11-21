import { join } from 'path';

const Joi = require('joi');

const validateCase= (cases) => {
    const validation = {
        id: joi.Number().required(),
        createdOn: joi.Date().required(),
        createdBy: joi.Number().required(),
        title : joi.String().required(),
        type : joi.String().required(),
        status: joi.String().required(),
        location: joi.String().required(),
        description : joi.String().required(),
        attachment : joi.String().required(),
    };

    return Joi.validate(cases, validation);
};
export default validateCase;