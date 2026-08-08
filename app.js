// const _ = require('lodash')
// const item = [1, [2, [3, [4, [5]]]]]
// const newItem = _.flattenDeep(item)
// consolconste.log(newItem)
// console.log('hello people')

const http = require('http')
const server = http.createServer()
server.on('request', (req, res)=>{
  res.end('welcome')
})
server.listen(5000)