const http = require('http')
const server = http.createServer((req, res)=>{
  if(req.url === '/')
    return res.end('welcome to our home page')
  if(req.url === '/about')
    return res.end('here is our short history')
  res.writeHead(404, {
    'Content-Type': 'text/html'
  });
  res.end(`
    <h2>Oops</h2>
    <p>there seems to be an error</p>
    <a href='/'>back to the home page</a>
  `)
})
server.listen(5000)