import mongoose from "mongoose";

const todoSchema = mongoose.Schema({
    text: String,
    createdAt: {
        type: Date,
        default: new Date()
    }
});

const TodoModel = mongoose.model('Todo', todoSchema);

export default TodoModel;