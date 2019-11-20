import express from 'express';
import  bodyParser from 'body-parser';

//const router =require('../Broadcaster/SERVER/Routes/users.route');
import  router from './SERVER/Routes/users.route';

const app = express();


app.use(bodyParser.json());

app.use('/',router);

// app.use((err, req, res, next) => {
//     if (err instanceof SyntaxError) return res.status(400).send(JSON.stringify({
//         error: `${err}`
//     }))

//     console.error(err);
//     res.status(500).send();
// });

const port = 3000;
app.use('/', (req, res) => {
    res.json({ status: 200, message: 'Server running'});
});

app.listen(3000, () =>{
    console.log(`listening to the local host  ${port}`);
    
    });

    export default app;
 