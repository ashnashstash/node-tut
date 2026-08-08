const {createReadStream} = require('fs')

const stream = createReadStream('./content/big.txt', {highWaterMark : 9000, encoding:'utf8'})

stream.on('data', (data)=>{
  console.log(data)
})
stream.on('error', (err)=>{
  console.log(err)
})