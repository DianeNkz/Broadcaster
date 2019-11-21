import express from 'express';
import addUser from '../Controllers/users.controller';
// import login from '../Controllers/login.controller';
// import casefunction from "../Controllers/caseRecord";
//const User= require("../Models/users");


const router= express.Router();

router.post('/api/V1/auth/userSigningup', addUser);
//router.post('/api/V1/auth/userLogging/', login);
//router.post('/api/V1/case/newIncident/', casefunction.createCase);

export default router ;