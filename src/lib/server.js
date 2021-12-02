const express = require('express')
const post = require('../routers/post.router')
const logger = require('../middlewares/logger')
const cors = require('cors')
const server = express()

//Middleware
server.use(cors({
	origin:'*'
}))
server.use(express.json())
server.use(logger)


//Routes
server.use('/post',post)

module.exports = server