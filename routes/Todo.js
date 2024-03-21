

const express = require("express");
const router = express.Router;

// these all are controllers 

const {
    createTodo,
    getTodoById,
    getTodo,
    deleteTodo,
    getAllTodos,
    updateTodo,
  } = require("../controllers/Todo");
  


router.param("todoId", getTodoById);
router.get("/todos", getAllTodos)
router.post("/todo/create", createTodo)
router.get("/todo/:todoId", getTodo)
router.put("/todo/:todoId", updateTodo)
router.delete("/todo/:todoId", deleteTodo)


module.exports = router