const express = require('express')
const app = express()
const {people} = require('./data')

app.use(express.static('./methods-public'))
app.use(express.urlencoded({extended : false}))

app.get('/api/people', (req, res)=>{
  res.status(200).json({success : true, data : people})
})

app.post('/api/people', (req, res)=>{
  const {name} = req.body
  if(!name){
    return res.status(401).json({success : false, msg : 'please input name feild'})
  }
  res.status(401).json({success : true, people : name})
})

app.post('/login', (req, res)=>{
  const {name} = req.body
  if(name){
    res.status(200).send(`welcome, ${name}`)
  }
  res.status(401).send('please provide credentials')
})

app.listen(5000, ()=>{
  console.log('server is listening on port 5000...')
})