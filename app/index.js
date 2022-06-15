const express = require('express')
const morgan = require('morgan')
const mongoose = require('mongoose')

const app = express()
const PORT = 4500

try {
    mongoose.connect('mongodb://127.0.0.1:27018/epita', {
        authSource: "admin",
        user: "root",
        pass: "example",
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    console.log('Connected to database')
} catch (error) {
    console.log('Error connecting to db' + error)
}

// ROUTES
const todosRouter = require('./routes/todos.routes')
const testRouter = require('./routes/test.routes')
const messageRouter = require('./routes/messages.routes')
const authRouter = require('./routes/authRoutes.routes')

app.use(morgan('dev'))
app.use(express.json())


// Adding routes
app.use('/', todosRouter)
app.use('/', testRouter)
app.use('/', messageRouter)
app.use('/', authRouter)

app.listen(PORT, () => {
    console.log('Server running on http://127.0.0.1:' + PORT)
})