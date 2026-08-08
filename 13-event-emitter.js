const eventEmitter = require('events')

const customEmitter = new eventEmitter()

customEmitter.on('response', (name, id)=>{
  console.log( `data received user ${name} id ${id}`)
})

customEmitter.on('response', ()=>{
  console.log( `some other logic`)
})

customEmitter.emit('response', 'john', 1)