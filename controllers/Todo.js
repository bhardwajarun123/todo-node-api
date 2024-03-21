

const Todo = require("./models/Todo")

exports.getTodoById = (req, res, next, todoId) => {
    Todo.findById(todoId).exec((err, todo) => {
        if(err || !todo) {
            return res.status(400).json({
                error: "400 todo not found"
            });
        }

        req.todo = todo
        next();
    });

}

exports.getAllTodos = (req, res) => {
    Todo.find().sort("_createAt").exec((err, todos) =>{
        if(err || !todos) {
            return res.status(400).json({
                error: "Error, while getting all todos"
            });
        }
        res.json(todos)

    })
}

exports.getTodo = (req,res) => {
    res.json(req.todo)
}

exports.createTodo = (req,res) => {
    const todo = new Todo(req.body)

    todo.save((err, task) => {
        if(err || !task) {
            return res.status(400).json({
                error: "Error, while creating Todo"
            });
        }
        res.json({task})
    })
}

exports.updateTodo = (req, res) => {
    const todo = req.todo;
    todo.task = req.body.task;
    todo.save((err, task) => {
        if(err || !task) {
            return res.status(400).json({
                error: "Error, while Update Todo"
            });
        }
        res.json({task})
    })
}

exports.deleteTodo = (req,res) => {
    const todo = req.todo
    todo.remove((err, task) => {
        if(err || !task) {
            return res.status(400).json({
                error: "Error, while Delete Todo"
            });
        }
        res.json({
            task_deleted: task,
            message: "Todo Deleted"
        })
    })
}

