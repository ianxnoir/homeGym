// https://www.npmjs.com/package/express-sse
import express from 'express'
const moment = require('moment')
const SSE = require('express-sse')

const sse = new SSE()
const app = express();
app.use(express.urlencoded({ extended: false }))//bodyParser已內置於express之內
app.use(express.json())//bodyParser已內置於express之內

app.use((req, res, next) => {
    console.log('[' + moment().format('yyyy-MM-DD HH:mm:ss') + '] ' + req.method + ' ' + req.path)
    next()
})

const isVerified = (req: express.Request, res: express.Response, next: express.NextFunction) => {
    if (req.body.password == "HomeGymStd") {
        console.log("verified access in /stream")
        next();
    } else {
        console.log("access denied in /strem")
    }
}

app.post('/stream/std', isVerified, sse.init);

function genRanData(){
    const randNumber = Math.floor(Math.random() * 2000)
    return randNumber
}

function genRanCreated_at(){
    const randNumber = Math.floor(Math.random() * 86400 * 100 * 1000) + Date.now()
    return Math.floor(randNumber/1000)
}

setInterval(async() => {
    const json = {
        "created_at": genRanCreated_at(),
        "column1": genRanData(),
        "column2": genRanData(),
        "column3": genRanData(),
        "column4": genRanData(),
        "column5": genRanData()
    }
    await sse.send(json)
    console.log(json)
}, 1000)

app.listen(8078, () => {
    console.log("listening on localhost:8078...")
})