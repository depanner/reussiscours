const express = require('express')
const path = require('path')
const controllers = require('./controllers.js')

const router = express.Router()

router.get('/index', (request, response) =>
{
    response.sendFile(path.resolve('_build', 'index.html'))
})

router.post('/api/email', controllers.email)

router.get('*', (request, response) =>
{
    response.sendFile(path.resolve('_build', 'not_found.html'))
})

module.exports = router