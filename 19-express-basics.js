const express = require('express')
const app = express()

app.get('/', (req, res)=>{
  res.send('About Page')
  console.log('Resource found')
})

app.get('/home', (req, res)=>{
  res.send('Home Page')
})

app.all('/{*splat}', (req, res) => {
  res.send('Resource not found');
});

app.listen(5000, ()=>{
  console.log('Server is listening on port 5000...')
})