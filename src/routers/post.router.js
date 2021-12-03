const express = require('express')

const controller = require('../controllers/post.controller')

const router = express.Router()

router.get('/',controller.getPost)

router.post('/',controller.createPost)

router.delete('/:id',controller.deletePost)

module.exports = router