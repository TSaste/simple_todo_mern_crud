const todo = require("./../models/todoModels")

exports.getAllTodos = async (req, res) => {
    try {
        const result = await todo.find()
        res.status(200).json({
            count: result.length,
            success: true,
            message: "all todos got",
            result
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            message: `error ${error}`
        })
    }
}
exports.getSingleTodo = async (req, res) => {
    try {
        const result = await todo.findById(req.params.id)
        res.status(200).json({
            success: true,
            message: "todo got",
            result
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            message: `error ${error}`
        })
    }
}
exports.addTodo = async (req, res) => {
    try {
        const result = await todo.create(req.body)
        console.log(req.body);
        res.status(200).json({
            success: true,
            message: "todo posted",
            result
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            message: `error ${error}`
        })
    }
}
exports.updateTodo = async (req, res) => {
    try {
        const result = await todo.findByIdAndUpdate(req.params.id, req.body, { new: true })
        res.status(200).json({
            success: true,
            message: "todo updated",
            result
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            message: `error ${error}`
        })
    }
}
exports.deleteTodo = async (req, res) => {
    try {
        const result = await todo.findByIdAndDelete(req.params.id)
        res.status(200).json({
            success: true,
            message: "todo deleted",
            result
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            message: `error ${error}`
        })
    }
}
exports.deleteAllData = async (req, res) => {
    try {
        const result = await todo.deleteMany()
        res.status(200).json({
            success: true,
            message: "all todos deleted",
            result
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            message: `error ${error}`
        })
    }
}