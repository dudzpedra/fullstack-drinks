const app = require('./app')
const http = require('http')
const { PORT } = require('./utils/config')
const { info } = require('./logger')

info('Connecting to', PORT)

const server = http.createServer(app)

server.listen(PORT, () => {
    info(`Server listenning on port ${PORT}`)
})
