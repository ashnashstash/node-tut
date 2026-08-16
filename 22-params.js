const express = require('express')
const app = express()
const {products} = require('./data')

app.get('/', (req, res)=>{
  res.send(`<h1>home page</h1><a href="/api/products">products</a>`)
})

app.get('/api/products', (req, res)=>{
  const newProduct = products.map((product)=>{
    const {id, name, image} = product
    return {id, name, image}
  })
  res.json(newProduct)
})

app.get('/api/products/:productId', (req, res)=>{
  const {productId} = req.params;
  const singleProduct = products.find((product) => product.id === Number(productId))
  if(!singleProduct) 
    {
      return res.status(404).send('product does not exist');
    }
  return res.json(singleProduct)
})

app.get('/api/products/:productId/reviews/:reviewId', (req, res)=>{
  console.log(req.params)
  res.send('hello world')
})

app.listen(5000, ()=>{
  console.log('server is listening on port 5000...')
})