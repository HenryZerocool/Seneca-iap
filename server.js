// Don't worry about CORS, it just used to allow the browser to accept something comming from an  external source.
// This is the working server.js, Original-server.js is the original code that does not check the file type.
const path = require('path');
const fs = require('fs');
const express = require('express');
const multer = require('multer');
const bodyParser = require('body-parser')
const app = express();
const router = express.Router();

const DIR = './uploads';
const PDF = 'application/pdf';
const image = 'image/jpeg';
let fileAllowed = false;

const multerConfig = {
    storage: multer.diskStorage({
        destination: (req, file, cb) => {
            cb(null, DIR);
        },
        filename: (req, file, cb) => {
            console.log(file);
            //get the file mimetype ie 'image/jpeg' split and prefer the second value ie'jpeg'
            const ext = file.mimetype.split('/')[1];
            cb(null, file.fieldname + '-' + Date.now() + '.' + ext); // Testing everything up to here and its working
        }
    }),
    // filter out and prevent non-image files.
    fileFilter: function(req, file, next) {
        if (!file) { // if its not a file??
            next();
        }
        console.log(file.mimetype); //instead of extenssions we can just use the mimetypes 

        if (file.mimetype.startsWith(PDF) || file.mimetype.startsWith(image)) {
            fileAllowed = true;
        } else {
            fileAllowed = false;
        }

        if (fileAllowed) { // cant do alerts here
            console.log('photo uploaded');
            next(null, true);
        } else {
            console.log("file not supported");
            return next();
        }
    }

};

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(function(req, res, next) { // this is to handel cors.
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
    res.setHeader('Access-Control-Allow-Methods', 'POST');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

app.get('/api', function(req, res) {
    res.end('file catcher example');
});

app.post('/api/upload', multer(multerConfig).single('photo'), function(req, res) {
    if (!req.file) {
        console.log("No file received");
        return res.send({
            success: false
        });

    } else {
        console.log('file received');
        return res.send({
            success: true
        })
    }
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, function() {
    console.log('Node.js server is running on port ' + PORT);
});