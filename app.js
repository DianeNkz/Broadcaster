import express from 'express';
import  bodyParser from 'body-parser';
import  router from './SERVER/Routes/users.route';
import dotenv from 'dotenv';


const app = express();

dotenv.config();
app.use(bodyParser.json());
app.use('/',router);

const PORT = process.env.PORT || 8000;
app.use('/', (req, res) => {
    res.status(200).json({ status: 200,
         message: 'Server running'});
});
app.get('/',(req,res)=>{hello})
app.listen(PORT, () =>{
    console.log(`listening to the local host  ${PORT}`);
    
    });

    export default app;
 