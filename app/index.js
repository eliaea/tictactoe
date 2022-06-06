const express = require('express')
const morgan = require('morgan')
const PORT = 4500


// adding routes
const todoRouter = require('./routes/todo')

const app = express()

app.use(morgan('dev'))
app.use(express.json())


app.post('/test', (request, response) => {
    console.log(request.body)
    const { name } = request.body

    if (!name && name == "") {
        return response.status(500).json('You have to give a name')
    }

    return response.status(200).json(`My name is ${name}`)
})

app.get('/test', (request, response) => {
    return response.status(200).json('It works on /test !')
})

app.use('/todos', todoRouter)

app.listen(PORT, () => {
    console.log('Server running on http://127.0.0.1:' + PORT)
})