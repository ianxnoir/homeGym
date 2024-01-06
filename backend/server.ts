import express from 'express';
import expressSession from 'express-session';
import http from 'http';
import { Server as SocketIO } from 'socket.io';
import grant from 'grant-express'
import multer from 'multer'
import multerS3 from 'multer-s3'
import fetch from 'node-fetch'
import cors from 'cors'
import * as dotenv from 'dotenv';
import path from 'path';
import Knex from 'knex';
import aws from 'aws-sdk';
import moment from 'moment'




const knexConfig = require('./knexfile');
export const knex = Knex(knexConfig[process.env.NODE_ENV || "development"])
dotenv.config({ path: path.resolve(__dirname, '.env') });

const PORT = 8080;
const app = express();




// app.use(cors({
//     origin: [process.env.SSEURL!]
// }))


// const server = new http.Server(app);
// export const io = new SocketIO(server);


const s3 = new aws.S3({
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    region: process.env.AWS_REGION
});


export const uploaded = multer({
    storage: multerS3({
        s3: s3,
        bucket: 'multer.gym',
        metadata: (req, file, cb) => {
            cb(null, { fieldName: file.fieldname });
        },
        key: (req, file, cb) => {
            if (file.mimetype != "application/octet-stream") {
                cb(null, `${"ptVideo/" + file.fieldname}-${Date.now()}.${file.mimetype.split('/')[1]}`);
            }
            else {
                cb(null, `${"ptPic/" + file.fieldname}-${Date.now()}.${file.mimetype.split('/')[1]}`);
            }
        }
    }),
    limits: {
        fieldSize: 25 * 1024 * 1024
    }
})

// const uploads = multer.diskStorage({
//     destination: function (req, file, cb) {

//         if(file.mimetype!="application/octet-stream"){
//             cb(null, `${__dirname}/ptVideo`);
//         }else{
//             cb(null, `${__dirname}/ptPic`);
//         }

//     },
//     filename: function (req, file, cb) {
//         cb(null, `${file.fieldname}-${Date.now()}.${file.mimetype.split('/')[1]}`);
//     }
// })



// export const upload = multer({storage: uploads})
// export const ptVideoUpload = multer({storage: ptVideo})

app.use(express.json({ limit: "2100000kb" }))

app.use(express.urlencoded({ extended: false }))
app.use(cors())
//  Session middleware and socket init logic
const sessionMiddleware = expressSession({
    secret: 'Open your account today!',
    resave: true,
    saveUninitialized: true
});

app.use(sessionMiddleware);

// //  Passing all socket requests through session middleware immediately
// io.use((socket, next) => {
//     const request = socket.request as express.Request;
//     sessionMiddleware(request, request.res as express.Response, next as express.NextFunction);
// });

app.use((req, res, next) => {
    console.log('[' + moment().format('yyyy-MM-DD HH:mm:ss') + '] ' + req.method + ' ' + req.path)
    next()
})

app.use(function (req, res, next) {
    (res as any).flush = function () { /* Do nothing */ }
    next();
})



export const SSE = require('express-sse')
export const sse_std_register = new SSE()
export const sse_pt_register = new SSE()
export const sse_payment = new SSE()


import { LoginService } from './service/LoginsService';
import { LoginController } from './controller/LoginsController';
import { Routes, routes } from './routes';

import { UserService } from './service/UsersService';
import { UserController } from './controller/UsersController';

import { PtService } from './service/PTsService';
import { PtController } from './controller/PTsController';

import { CategoryService } from './service/CategoriesService';
import { CategoryController } from './controller/CategoriesController';

import { PackageService } from './service/PackageService'
import { PackageController } from './controller/PackageController'

import { CommonController } from './controller/CommonController';
import { CommonService } from './service/CommonService';

export const loginService = new LoginService(knex, sse_std_register, sse_pt_register)
export const loginController = new LoginController(loginService)

export const userService = new UserService(knex)
export const userController = new UserController(userService)

export const ptService = new PtService(knex)
export const ptController = new PtController(ptService)

export const categoryService = new CategoryService(knex)
export const categoryController = new CategoryController(categoryService)

export const packageService = new PackageService(knex)
export const packageController = new PackageController(packageService, sse_payment)

export const commonService = new CommonService(knex)
export const commonController = new CommonController(commonService)

Routes.Initialize()



//  Distributing public static files
app.use(express.static('./public'));

app.use('/', routes)



// io.on('connect', async (socket) => {
//     console.log('New socket connection established.');
//     if (socket.request.session['user']) {
//         console.log("Querying database");
//     }
//     socket.on('buy-package', async () => {
//         if (socket.request.session['user']) {
//             console.log("buy-package ");
//         }
//     })
//     socket.on('booked', async () => {
//         if (socket.request.session['user']) {
//             console.log("booked session");
//         }
//     })
//     socket.on('renew-rating-toServer', async () => {
//         if (socket.request.session['user']) {
//             console.log("renew-rating");
//         }
//     })
// })


app.use((req, res) => {
    res.status(404).send("Error 404 not Found!")
})




try {
    setInterval(async () => {
        await sse_std_register.send("keeping")
        await sse_pt_register.send("keeping")
        await sse_payment.send("keeping")
    }, 1000)
} catch (e) {
    console.log(e)
}


app.listen(process.env.PORT, () => {
    console.log('Listening to port ', process.env.PORT)
})
