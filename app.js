// const _ = require('lodash')
// const item = [1, [2, [3, [4, [5]]]]]
// const newItem = _.flattenDeep(item)
// console.log(newItem)
// console.log('hello people')

const http = require('http')
const {readFileSync} = require('fs')

const homePage = readFileSync('./navbar-app/index.html')

const server = http.createServer((req, res)=>{
  //console.log(req.method)
  //console.log(req.url)
  const url = req.url

  if(url === '/'){
    res.writeHead(200, {'content-type' : 'text/html'})
    res.write(homePage)
    res.end()
  }
  else if(url === '/about'){
    res.writeHead(200, {'content-type' : 'text/html'})
    res.write(`<h1>about page</h1>`)
    res.end()
  }
  else{
    res.writeHead(404, {'content-type' : 'text/html'})
    res.write(`<h1>error 404</h1>`)
    res.end()
  }
})

server.listen(5000)