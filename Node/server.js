'use strict'

const {createServer} = require('http')

const data = JSON.stringify([
    {id: 'A1', name: 'Vacuum Cleaner', rrp: '99.99', info: 'The worst vacuum in the world'},
    {id: 'A2', name: 'Leaf Blower', rrp: '303.33', info: 'This produt WILL blow your socks off'},
    {id: 'B1', name: 'Chocolate Bar', rrp: '22.43', info: 'Delicious overpriced chocolate'}
])

const server = createServer((req,res) => {
    res.setHeader('Access-Control-Allow-origin', '*')
    res.setHeader('Content-Type', 'application/json')
    res.end(data)

})

server.listen(3000)

