import express, { json } from 'express'
import expressSession from 'express-session'
import moment from 'moment'
import cors from 'cors'

const app = express()
const sessionMiddleware = expressSession({
    secret: 'Whatever you like',
    saveUninitialized: true
})

app.use(sessionMiddleware)
app.use((req, res, next) => {
    console.log('[' + moment().format('yyyy-MM-DD HH:mm:ss') + '] ' + req.method + ' ' + req.path)
    next()
})

app.use(express.urlencoded({ extended: false }))
app.use(express.json())

app.get('/recommendation', (req,res) => {
   let command_json = JSON.parse(req.body)
   let title_command = command_json.title
   let date_command = command_json.date
   let content_command = command_json.content

})

app.use((req, res) => {
    res.status(404).json('404')
})

let port = 8081 
app.listen(port,() => { 
    console.log('listening on http://localhost:'+ port);
    console.log('listening on http://www.lawrence-gym.tk'); 
}) 

import {MongoClient} from 'mongodb';
// or as an es module:
// import { MongoClient } from 'mongodb'

// Connection URL
const url = 'mongodb://localhost:27017'
const client = new MongoClient(url)

const dbName = 'homegym';

async function test() {
  // Use connect method to connect to the server
  await client.connect()
  console.log('Connected successfully to server')
  const db = client.db(dbName)
  const collection = db.collection('articles')

  // category 1 
  const title1_result = await collection.find({ "title" : {$regex : ".*伸展.*|.*筋.*"}}).project({"title":1,_id:0}).skip(0).limit(1).toArray();
  for await (const doc of title1_result) { console.log(doc); }
  
  const date1_result = await collection.find({ "title" : {$regex : ".*伸展.*|.*筋.*"}}).project({"date":1,_id:0}).skip(0).limit(1).toArray();
  for await (const doc of date1_result) {
    console.log(doc);
  }
  const content1_result = await collection.find({ "title" : {$regex : ".*伸展.*|.*筋.*"}}).project({"content":1,_id:0}).skip(0).limit(1).toArray();
  for await (const doc of content1_result) {
  console.log(doc);
  }
  var category1 = [title1_result, date1_result, content1_result] 


  // category 2
  const title2_result = await collection.find({ "title" : {$regex : ".*瑜.*"}}).project({"title":1,_id:0}).skip(0).limit(1).toArray();
  for await (const doc of title2_result) {
    console.log(doc);
  }
  const date2_result = await collection.find({ "title" : {$regex : ".*瑜.*"}}).project({"date":1,_id:0}).skip(0).limit(1).toArray();
  for await (const doc of date2_result) {
   console.log(doc);
  }
  const content2_result = await collection.find({ "title" : {$regex : ".*瑜.*"}}).project({"content":1,_id:0}).skip(0).limit(1).toArray();
  for await (const doc of content2_result) {
   console.log(doc);
  }
  var category2 = [title2_result, date2_result, content2_result] 
  


  // category 3
  const title3_result = await collection.find({ "title" : {$regex : ".*拳.*"}}).project({"title":1,_id:0}).skip(0).limit(1).toArray();
  for await (const doc of title3_result) {
    console.log(doc);
  }
  const date3_result = await collection.find({ "title" : {$regex : ".*拳.*"}}).project({"date":1,_id:0}).skip(0).limit(1).toArray();
  for await (const doc of date3_result) {
  console.log(doc);
  }
  const content3_result = await collection.find({ "title" : {$regex : ".*拳.*"}}).project({"content":1,_id:0}).skip(0).limit(1).toArray();
  for await (const doc of content3_result) {
  console.log(doc);
  }
  var category3 = [title3_result, date3_result, content3_result] 




  // category 4
  const title4_result = await collection.find({ "title" : {$regex : ".*核.*"}}).project({"title":1,_id:0}).skip(0).limit(1).toArray();
  for await (const doc of title4_result) {
  console.log(doc);
  }
  const date4_result = await collection.find({ "title" : {$regex : ".*核.*"}}).project({"date":1,_id:0}).skip(0).limit(1).toArray();
  for await (const doc of date4_result) {
  console.log(doc);
  }
  const content4_result = await collection.find({ "title" : {$regex : ".*核.*"}}).project({"content":1,_id:0}).skip(0).limit(1).toArray();
  for await (const doc of content4_result) {
  console.log(doc);
  }
  var category4 = [title4_result, date4_result, content4_result] 


  // category 5
  const title5_result = await collection.find({ "title" : {$regex : ".*核.*"}}).project({"title":1,_id:0}).skip(0).limit(1).toArray();
  for await (const doc of title5_result) {
  console.log(doc);
  }
  const date5_result = await collection.find({ "title" : {$regex : ".*核.*"}}).project({"date":1,_id:0}).skip(0).limit(1).toArray();
  for await (const doc of date5_result) {
  console.log(doc);
  }
  const content5_result = await collection.find({ "title" : {$regex : ".*核.*"}}).project({"content":1,_id:0}).skip(0).limit(1).toArray();
  for await (const doc of content5_result) {
  console.log(doc);
  }
  var category5 = [title5_result, date5_result, content5_result] 

  // category 6 
  const title6_result = await collection.find({ "title" : {$regex : ".*健身.*"}}).project({"title":1,_id:0}).skip(0).limit(1).toArray();
  for await (const doc of title6_result) {
  console.log(doc);
  }
  const date6_result = await collection.find({ "title" : {$regex : ".*健身.*"}}).project({"date":1,_id:0}).skip(0).limit(1).toArray();
  for await (const doc of date6_result) {
  console.log(doc);
  }
  const content6_result = await collection.find({ "title" : {$regex : ".*健身.*"}}).project({"content":1,_id:0}).skip(0).limit(1).toArray();
  for await (const doc of content6_result) {
  console.log(doc);
  }
  var category6 = [title6_result, date6_result, content6_result] 
  
  // category 7
  const title7_result = await collection.find({ "title" : {$regex : ".*增肌.*|.*肌肉.*|.*腹肌.*|.*肌力.*"}}).project({"title":1,_id:0}).skip(1).limit(1).toArray();
  for await (const doc of title7_result) {
  console.log(doc);
  }
  const date7_result = await collection.find({ "title" : {$regex : ".*增肌.*|.*肌肉.*|.*腹肌.*|.*肌力.*"}}).project({"date":1,_id:0}).skip(1).limit(1).toArray();
  for await (const doc of date7_result) {
  console.log(doc);
  }
  const content7_result = await collection.find({ "title" : {$regex : ".*增肌.*|.*肌肉.*|.*腹肌.*|.*肌力.*"}}).project({"content":1,_id:0}).skip(1).limit(1).toArray();
  for await (const doc of content7_result) {
  console.log(doc);
  }
  var category7 = [title7_result, date7_result, content7_result] 
  
  // category 8
  const title8_result = await collection.find({ "title" : {$regex : ".*心肌.*"}}).project({"title":1,_id:0}).skip(6).limit(1).toArray();
  for await (const doc of title8_result) {
  console.log(doc);
  }
  const date8_result = await collection.find({ "title" : {$regex : ".*心肌.*"}}).project({"date":1,_id:0}).skip(6).limit(1).toArray();
  for await (const doc of date8_result) {
  console.log(doc);
  }
  const content8_result = await collection.find({ "title" : {$regex : ".*心肌.*"}}).project({"content":1,_id:0}).skip(6).limit(1).toArray();
  for await (const doc of content8_result) {
  console.log(doc);
  }
  var category8 = [title8_result, date8_result, content8_result] 


  app.get ('./news', async(req:any, res:any) => {
    if (req.body== 1)  {
      res.send(category1)}
      else if (req.body==2) {
        res.send(category2)} 
        else if (req.body==3) {
          res.send(category3)} 
          else if (req.body==4) {
            res.send(category4)} 
            else if (req.body==5) {
              res.send(category5)} 
              else if (req.body==6) {
                res.send(category6)} 
                else if (req.body==7) {
                  res.send(category7)} 
                  else if (req.body==8) {
                    res.send(category8)}
                    else if (req.body = 'default'){
                      res.send(category1)
                    } 
  })

  // the following code examples can be pasted here...
  //   const findResult = await collection.find({}).toArray()
  //   console.log('Found documents =>', findResult)
  return 'done.'
}

test()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close())

app.use(cors())

var corsOptions = {
    origin: 'https://ellie-lam.site',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
  }
   
  app.get('/products/:id', cors(corsOptions), function (req, res, next) {
    res.json({msg: 'This is CORS-enabled for only example.com.'})
  })
   

