import express from 'express';
import addUser from '../Controllers/users.controller';
import login from '../Controllers/login.controller';
import casefunction from "../Controllers/caseRecord";
import manageAll from "../Controllers/admin.controller";
//import auth from '../middleware/auth';



const router= express.Router();

router.post('/api/V1/auth/userSignup', addUser);
router.post('/api/V1/auth/userLogin/', login);
router.post('/api/V1/case/newIncident/',  casefunction.createCase);
router.get('/api/V1/case/allIncident/', casefunction.allCases);
router.get('/api/V1/case/specificIncident/:id', casefunction.specificCase);
router.delete('/api/V1/case/deleteIncident/:id', casefunction.deleteCase);
router.put('/api/V1/case/editContent/:id', casefunction.editContent);
router.put('/api/V1/admin/editstatus/:id', manageAll.editStatus);


export default router ; 