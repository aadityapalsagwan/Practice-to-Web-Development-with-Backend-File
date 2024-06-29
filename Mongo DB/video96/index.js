import mongoose from "mongoose";
import express from "express";
import { Todo } from "./models/todo.js";

let conn = await mongoose.connect("mongodb://localhost:27017/todo")


const app = express()
const port = 3000

app.get('/', (req, res) => {
    
    const todo = new Todo({ title: "Hey Parth", desc: "Description of todo", isDone: false })
    todo.save()
    res.send('Hello Aaditya Pal!')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})