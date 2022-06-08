const express = require('express')
const morgan = require('morgan')
const mongoose = require('mongoose')

const app = express()
const PORT = 4500

try {
    mongoose.connect('mongodb://root:example@localhost:27018', {})
    console.log('Connected to database')
} catch (error) {
    console.log('Error connecting to db' + error)
}

// ROUTES
const todosRouter = require('./routes/todos.routes')
const testRouter = require('./routes/test.routes')
const messageRouter = require('./routes/messages.routes')

app.use(morgan('dev'))
app.use(express.json())


// Adding routes
app.use('/', todosRouter)
app.use('/', testRouter)
app.use('/', messageRouter)

app.listen(PORT, () => {
    console.log('Server running on http://127.0.0.1:' + PORT)
})