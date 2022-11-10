import mongoose from "mongoose";
import TodoModel from "../models/todoSchema.js";

export const getTodos = async (req, res) => {
    try {
        const todos = await TodoModel.find();
        res.status(200).json(todos);
    } catch (error) {
        res.status(error.statusCode).json({error: error.message});
    }
}

export const createTodo = async (req, res) => {
    const todo = req.body;
    const newTodo = new TodoModel(todo);

    try {
        await newTodo.save();
        res.status(201).json(newTodo);
    } catch (error) {
        res.status(409).json({error: error.message});
    }
}

export const deleteTodo = async (req, res) => {
    const { id } = req.params;

    try {
        await TodoModel.findByIdAndRemove(id);
        res.status(200).json({message: "Todo deleted successfully"});
    } catch (error) {
        res.status(error.statusCode).json({error: error.message});
    }
}

export const updateTodo = async (req, res) => {
    const { id: _id } = req.params;
    const todo = req.body;

    if(!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).json({error: "No todo with that id"});

    const updatedTodo = await TodoModel.findByIdAndUpdate(_id, todo, {new: true});
    res.status(200).json(updatedTodo);
}