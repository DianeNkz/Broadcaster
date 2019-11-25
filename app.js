import express from 'express';
import  bodyParser from 'body-parser';
import  router from './SERVER/Routes/users.route';
import dotenv from 'dotenv';
import multer from 'multer';
import cors from "cors";
import DataUri from 'datauri';
import Cloudinary from 'cloudinary';

const app = express();
const uploaded= multer();
dotenv.config();
const dataUri = new DataUri();

const {
    CLOUDINARY_API_KEY,
    CLOUDINARY_AUTHORIZATION,
    CLOUDINARY_CLOUD_NAME,
} = process.env;

Cloudinary.config({
    cloud_name: CLOUDINARY_CLOUD_NAME,
    api_key: CLOUDINARY_API_KEY,
    api_secret: CLOUDINARY_AUTHORIZATION
});
app.use(bodyParser.json());
app.use('/',router);
app .use((req,res,next)=> {
    res.header('Access-Control-Allow-Origin', '*');
    next();
});

const links =[ 'https://github.com/DianeNkz/Broadcaster','http://locahost:8000'];
const corsOptions ={
    origin: (origin,callback) =>{
        if(links.indexOf(origin) !== -1){
            callback(null,true)
        } else {
            callback(new Error('not allowed to access'))
        }
    }
}
app.post('/uploads',cors(corsOptions ), uploaded.single('file'), (req,res) => {
    let image= req.file;
    if(image) {
        image= dataUri.format(path.extname(image.originalname).toString(),image.buffer).content ;
        Cloudinary.uploader.upload(image, (error,result) =>{
            if(error){
                return res.status(500).json({
                    error:' Failed to upload to the cloud',
                    details:error,
                })
            }
            return res.status(200).json({
                data:result
            });
        });
    } else {
        return res.status(400).json({
            error: 'please add image to be uploaded',
        });
    }
});


const PORT = process.env.PORT || 8000;
app.use('/', (req, res) => {
    res.json({ status: 200, message: 'Server running'});
});

app.listen(PORT, () =>{
    console.log(`listening to the local host  ${PORT}`);
    
    });

    export default app;
 