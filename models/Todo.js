
const mongoose = require("mongoose")

// Define the structure of a todo Document

const Todo = new mongoose.Schema(
    {
        task : {
            type: String,
            required: true,
            trim: true,
        },
    },
    {
        timestamps: true
    }
)

module.exports = mongoose.model("Todo", Todo);