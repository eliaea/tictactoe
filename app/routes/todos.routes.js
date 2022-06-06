const express = require('express')
const router = express.Router()

const todos = require('../services/todos.service')

router.get('/todos', todos.getTodos)
router.post('/todos/add/todo', todos.addTodo)
router.put('/todos/:index', todos.getTodosIndex)

module.exports = router