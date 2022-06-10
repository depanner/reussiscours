const express = require('express')
const http = require('http')
const path = require('path')

const app = express()
const server = http.createServer(app)
const PORT = process.env.PORT || 8080

app.use(express.json())
app.use(express.urlencoded({extended: true}))

if(process.env.NODE_ENV === 'development')
{
    require('./middleware/webpack.middleware')(app)
}
else
{
    app.use(express.static(path.resolve('_build')))
}

app.use('/static', express.static(path.resolve('src', 'backend', 'public'))) 

app.get('/index', (request, response) =>
{
    response.sendFile(path.resolve('_build', 'index.html'))
})

app.get('*', (request, response) =>
{
    response.sendFile(path.resolve('_build', 'not_found.html'))
})

server.listen(PORT, () => 
{
    console.log(`Server starting at http://localhost:${PORT}`)
})