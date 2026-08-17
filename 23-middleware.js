const express = require('express')
const app = express()
const logger = require('./logger')
const morgan = require('morgan')
const authorize = require('./authorize')

// app.use([logger, authorize])

app.use(morgan('tiny'))

app.get('/', (req, res)=>{
  res.send('home page')
})

app.get('/about', (req, res)=>{
  res.send('about page')
})

app.get('/api/products', (req, res)=>{
  res.send('products')
})

app.get('/api/services', [logger, authorize], (req, res)=>{
  console.log(req.user)
  res.send('services')
})

app.listen(5000, ()=>{
  console.log('server is listening on port 5000...')
})