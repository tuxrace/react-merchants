const app = require('./app')
const http = require('http')

const server = http.createServer(app)
const port = process.env.PORT || 3004

server.listen(port, function(){
  console.log('App is running at port ' + port)
})
