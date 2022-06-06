const todos = []


const getTodos = (req, res) => {
    res.status(200).json(todos)
}


const addTodo = (req, res) => {
    const { todo } = req.body

    todos.push(todo)

    res.status(200).json(todo)
}


const getTodosIndex = (req, res) => {

    const { index } = req.params
    const { test } = req.query

    console.log(index, test)
}

module.exports = {
    getTodos,
    addTodo,
    getTodosIndex
}