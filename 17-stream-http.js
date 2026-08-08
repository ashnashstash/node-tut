const http = require('http')
const fs = require('fs')

http
  .createServer((req, res)=>{
    const fileStream = fs.createReadStream('./content/big.txt')
    fileStream.on('open', ()=>{
      fileStream.pipe(res)
    })
    fileStream.on('error', (err)=>{
      console.log(err)
    })
  })
  .listen(3000)