const mongoose = require("mongoose");

const todoSchema = mongoose.Schema({
    task: {
        type: String,
        required: true
    },
    desc: {
        type: String,
        required: true
    },
    priority: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model("todo", todoSchema)