const express = require("express")
const { getAllTodos, addTodo, getSingleTodo, updateTodo, deleteTodo, deleteAllData } = require("../controllers/todoControllers")
const todoRouter = express.Router()

todoRouter.route("/todos")
    .get(getAllTodos)
    .post(addTodo)

todoRouter.route("/todos/delete")
    .delete(deleteAllData)

todoRouter.route("/todos/:id")
    .get(getSingleTodo)
    .put(updateTodo)
    .delete(deleteTodo)


module.exports = todoRouter