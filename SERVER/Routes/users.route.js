import express from 'express';
import addUser from '../Controllers/users.controller';
import login from '../Controllers/login.controller';
import casefunction from "../Controllers/caseRecord";




const router= express.Router();

router.post('/api/V1/auth/userSigningup', addUser);
router.post('/api/V1/auth/userLogging/', login);
router.post('/api/V1/case/newIncident/', casefunction.createCase);
router.get('/api/V1/case/allIncident/', casefunction.allCases);
router.get('/api/V1/case/specificIncident/:id', casefunction.specificCase);
router.delete('/api/V1/case/deleteIncident/:id', casefunction.deleteCase);
router.put('/api/V1/case/editContent/:id', casefunction.editContent);

export default router ;