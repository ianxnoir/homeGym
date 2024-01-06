// https://www.npmjs.com/package/express-sse
import express from 'express'
const moment = require('moment')
const SSE = require('express-sse')
const sse_std_register = new SSE()
const sse_pt_register = new SSE()
const sse_payment = new SSE()

const app = express();
app.use(express.urlencoded({ extended: false }))//bodyParser已內置於express之內
app.use(express.json())//bodyParser已內置於express之內
app.use((req, res, next) => {
    console.log('[' + moment().format('yyyy-MM-DD HH:mm:ss') + '] ' + req.method + ' ' + req.path)
    next()
})
const isVerified = (req: express.Request, res: express.Response, next: express.NextFunction) => {
    if (req.body.password == "HomeGymGoGo") {
        console.log("verified access in /stream")
        next();
    } else {
        console.log("access denied in /strem")
    }
}

app.post('/stream/std', isVerified, sse_std_register.init);
app.post('/stream/pt', isVerified, sse_pt_register.init);
app.post('/stream/payment', isVerified, sse_payment.init);

async function std_streaming(){
    const std_registered_info = {}
    await sse_std_register.send(std_registered_info)
}

async function pt_streaming(){
    const pt_registered_info = {}
    await sse_pt_register.send(pt_registered_info)
}

async function payment_streaming(){
    const pt_registered_info = {}
    await sse_payment.send(pt_registered_info)
}

app.listen(8080, () => {
    console.log("listening on localhost:8080...")
})
