const express = require('express')

const controller = require('../controllers/post.controller')

const router = express.Router()

router.get('/',controller.getPost)

router.post('/',controller.postPost)

router.put('/',controller.updatePost)

module.exports = router


