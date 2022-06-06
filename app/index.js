const express = require('express')
const morgan = require('morgan')
const app = express()
const PORT = 4500


// ROUTES
const todosRouter = require('./routes/todos.routes')
const testRouter = require('./routes/test.routes')

app.use(morgan('dev'))
app.use(express.json())


// Adding routes
app.use('/', todosRouter)
app.use('/', testRouter)

app.listen(PORT, () => {
    console.log('Server running on http://127.0.0.1:' + PORT)
})